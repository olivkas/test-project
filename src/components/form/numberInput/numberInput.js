import React, { Component } from 'react';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';


class NumberInput extends Component {
    
  state = { error: false };

  render() {
  const {title, value, handOnChange} = this.props;

    return (
      <div className="wrapper_item">
        <Label size='l' isNoWrap={ true }>{title}</Label>
        {<div><Input
          label='Число'
          placeholder='Введите число'
          view='line'
          size='m'
          error={this.state.error ? 'Только численные значения' : null}
          value={value}
          onChange={value => {
            this.setState({
            error: !value.match(/^\d+$/)
            });
          handOnChange(value);}} 
        /></div>}
      </div>
    );
}}

export default NumberInput;