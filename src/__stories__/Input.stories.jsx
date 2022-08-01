import React from 'react';

import {
  Input,
} from '../components';

import {
  InputTypes,
} from '../enums';


export default {
  title: 'Input',
  component: Input,
  
};

const Template = args => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Input.defaultProps,
  placeholder: 'Email',
  showRequiredText: true,
  width: '250px',
};

export const Password = Template.bind({});
Password.args = {
  ...Input.defaultProps,
  type: InputTypes.Password,
  placeholder: 'Enter password',
  showPassword: false,
  showIcon: true,
  iconSrc: 'https://via.placeholder.com/64',
  width: '250px',
};

export const BasicPrefixed = Template.bind({});
BasicPrefixed.args = {
  ...Input.defaultProps,
  showPrefix: true,
  prefix: '$',
  width: '250px',
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  ...Input.defaultProps,
  type: InputTypes.Date,
  width: '250px',
};
