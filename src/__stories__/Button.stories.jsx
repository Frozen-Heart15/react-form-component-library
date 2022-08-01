import React from 'react';

import {
  Color,
} from '../enums/enums';

import {
  Button,
  IconButton,
  LinkButton,
} from '../components/button';

// import {
//   baseTemplateArgTypes,
//   booleanArgType,
//   textArgType,
//   textTemplateArgTypes,
// } from './argTypes';

export default {
  title: 'Buttons',
  component: Button,
  // argTypes: {
  //   ...baseTemplateArgTypes,
  //   ...textTemplateArgTypes,

  //   iconAlt: textArgType,
  //   iconSrc: textArgType,
  //   iconHeight: textArgType,
  //   iconWidth: textArgType,
  //   iconPadding: textArgType,

  //   hoverTextDecoration: textArgType,
  //   disabled: booleanArgType,
  //   label: textArgType,
  // },
};

export const BasicButtonDemo = args => <Button {...args} />;

BasicButtonDemo.args = {
  ...Button.defaultProps,
  label: 'Generic Button',
  backgroundColor: Color.Orange,
  hoverBackgroundColor: Color.Red,
};

export const DisabledButtonDemo = args => <Button {...args} />;

DisabledButtonDemo.args = {
  ...Button.defaultProps,
  label: 'Disabled Button',
  disabled: true,
};

export const PrimaryButtonDemo = args => (
  <Button
    {...args}
    onPress={() => alert('clicked Primary')} />
);

PrimaryButtonDemo.args = {
  ...Button.defaultProps,
  label: 'Primary Button',
};

export const LinkButtonDemo = args => (
  <LinkButton
    {...args}
    onPress={() => alert('clicked link')} />
);

LinkButtonDemo.args = {
  ...LinkButton.defaultProps,
  label: 'Link Button',
};

export const IconButtonDemo = args => (
  <IconButton
    {...args}
    onPress={() => alert('clicked icon')} />
);

IconButtonDemo.args = {
  ...IconButton.defaultProps,
  label: 'Icon Button',
  iconSrc: 'https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png',
};
