import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextInput from './textInput/textInput';
import NumberInput from './numberInput/numberInput';
import ListSelect from './listSelect/listSelect';
import { setValue as setValueAction } from '../../store/actions';


class Fields extends Component  {

  componentDidMount() {
  const {name, setValue} =this.props;
    setValue({
      [name]: ''
    });
  }

  handOnChange = (value) => {
    const {name, setValue, type, validation} =this.props;
    setValue({
      [name]: value
    });
    if(type === 'NUMERIC') {
      validation(Boolean(value.match(/^\d+$/)))
    }
  }

switchType = () => {
    const {type,title,values,name,form} = this.props;
    switch(type) {
      case "TEXT": return  <TextInput title={title} handOnChange={this.handOnChange} value={form[name]} />;
      case "NUMERIC": return <NumberInput title={title} handOnChange={this.handOnChange} value={form[name]} />;
      case "LIST": return <ListSelect title={title} values={values} handOnChange={this.handOnChange} value={form[name]} />;

      default: return <h1>no data</h1>
    }
  }

  render() {
    return(
      <div>{ this.switchType() }</div>
    );
  }
};

const mapStateToProps = state => ({
  form: state.form
});

const mapDispatchToProps = { setValue: setValueAction };

export default connect(mapStateToProps, mapDispatchToProps)(Fields)
