import React from 'react';

import {
  RadioButton,
} from '../components';

export default {
  title: 'RadioButton',
  component: RadioButton,

};

// export const RadioButtonBasic = props => (
//   <RadioButton
//     onChange={e => {
//       console.log(e);
//     }}
//     {...props} />
// );

// RadioButtonBasic.args = {
//   ...RadioButton.defaultProps,
//   name: 'customerType',
//   value: 'STDBANK',
//   labelText: 'I am a Standard Bank customer',
//   checked: false,
// };

export const RadioButtonBasic = props => {
  
  const [
    radioValue,
    setRadioValue,
  ] = React.useState(false);

return (
  <RadioButton
        {...props}
        name={'customerType'}
        onClick={e => {
          setRadioValue(!radioValue)
        }}
        value={'ACCEPT'}
        labelText={'I accept'}
        checked={radioValue} />
);
  }

RadioButtonBasic.args = {
  ...RadioButton.defaultProps,
  name: 'TnC',
  value: 'ACCEPT',
  labelText: 'I accept',
  checked: false,
};

export const RadioButtonGroup = props => {
  const [
    radioValue,
    setRadioValue,
  ] = React.useState('ACCEPT');

  return (
    <React.Fragment>
      <RadioButton
        {...props}
        name={'TnC'}
        onChange={e => {
          setRadioValue(e.target.value);
        }}
        value={'ACCEPT'}
        labelText={'I accept'}
        checked={radioValue === 'ACCEPT'} />

      <RadioButton
        {...props}
        name={'TnC'}
        onChange={e => {
          setRadioValue(e.target.value);
        }}
        value={'DECLINE'}
        labelText={'I decline'}
        checked={radioValue === 'DECLINE'} />
    </React.Fragment>
  );
};

RadioButtonGroup.args = {
  ...RadioButton.defaultProps,
};
