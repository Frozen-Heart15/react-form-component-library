import React from 'react';

import {
  Checkbox,
} from '../components';


export default {
  title: 'Checkbox',
  component: Checkbox,
};


export const Basic = args => {

  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      {...args}
      checked={(args.checked ?? checked) || args.checked}
      onChange={() => setChecked(!checked)} />
  );
};

Basic.args = {
  ...Checkbox.defaultProps,
  labelText: 'Checkbox',
  checked: undefined,
  name: 'my-checkbox',
  value: 'foo',
};


// export const MultipleCheckbox = args => {

//   const [checked, setChecked] = React.useState(false);

//   return (
//     <>
//     <Checkbox
//       {...args}
//       checked={(args.checked ?? checked) || args.checked}
//       onChange={() => setChecked(!checked)} />

//       <Checkbox
//       {...args}
//       checked={(args.checked ?? checked) || args.checked}
//       onChange={() => setChecked(!checked)} />  

// </>
//   );
// };

// Basic.args = {
//   ...Checkbox.defaultProps,
//   labelText: 'Checkbox',
//   checked: undefined,
//   name: 'my-checkbox',
//   value: 'foo',
// };




