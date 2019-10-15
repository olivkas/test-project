import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Fields from './fields'
import { postData, setData, abortData } from '../../store/actions';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Button from 'arui-feather/button';
import Spin from 'arui-feather/spin';
import axios from 'axios';

class FormData extends Component {

  state =  {
    isValid: false,
    source: null
  };

  validation = isValid => this.setState({ isValid });

  handleSubmit = (e) => {
    e.preventDefault();
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    this.setState({ source });
    const { form, postData, setData } = this.props;
    setData(form, source);
    console.log(form);
    postData();
  };

  cancel = () => {
    this.props.abortData();
    this.state.source.cancel();
  }

  render() {
    const { data, image, title, fields } = this.props;
    return (
      <div>
        <img className="img" src={`${image}`} alt="icon" />
        <h1>{title}</h1>
        <Form onSubmit={this.handleSubmit }>
          <div className="fields">
            <FormField>
              <div>{(fields.map(data => (
                <Fields title={data.title} name={data.name} type={data.type} values={data.values} validation={this.validation} />)
              ))}
              </div>
            </FormField>
          </div>
          <FormField>
            <Button view='extra' type='submit' disabled={!this.state.isValid}>Отправить</Button>
          </FormField>
        </Form>
        {
          data.cancel && <div><Spin size='l' visible={true} />Loading <Button view='extra' onClick={this.cancel}>Cancel</Button></div>
          }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  form: state.form,
  data: state.data
});

const mapDispatchToProps = { postData, setData, abortData };

export default connect(mapStateToProps, mapDispatchToProps)(FormData)
