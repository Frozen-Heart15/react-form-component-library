import React from 'react';

import {
  Toggle,
} from '../components';

export default {
  title: 'Toggle',
  component: Toggle,
 
};

export const Basic = args => {

  const [checked, setChecked] = React.useState(false);

  return (
    <Toggle
      {...args}
      checked={(args.checked == undefined && checked) || args.checked}
      onChange={() => setChecked(!checked)} />
  );
};
Basic.args = {
  ...Toggle.defaultProps,
  labelText: 'Toggle demo',
};
