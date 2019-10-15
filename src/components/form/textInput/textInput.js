import React from 'react';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';

const TextInput = ( props ) => {

  const {value, title, handOnChange} = props;

  return (
    <div className="wrapper_item">
      <Label size='l' isNoWrap={ true }>{title}</Label>
      <div><Input
        label='Cтрока'
        placeholder='Введите строку'
        view='line'
        size='m'
        value={value}
        onChange={val => {
        handOnChange(val);}}
      />
      </div>
    </div>
);}

export default TextInput;