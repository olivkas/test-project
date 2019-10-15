import React from 'react';
import Select from 'arui-feather/select';
import Label from 'arui-feather/label';

const ListSelect = ( props ) => {
  const {values, title, handOnChange} = props;
  const options = [
    { value: '01', text: values.none },
    { value: '02', text: values.v1 },
    { value: '03', text: values.v2 },
    { value: '04', text: values.v3 }
  ];
return (
  <div className="wrapper_item">
    <Label size='l' isNoWrap={ true }>{title}</Label>
    <Select
      size='m'
      mode='radio-check'
      options={options}
      onChange={val => {
      handOnChange(val);}}
    />
  </div>
);
}

export default ListSelect;