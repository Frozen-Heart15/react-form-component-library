import React from 'react';

import{
  Color,
  BorderRadius,
} from '../../enums';

import {
  Dropdown
} from './Dropdown';

export const DarkDropdown = props => (

  <Dropdown
    {...props} />
);

DarkDropdown.displayName = 'DarkDropdown';

DarkDropdown.propTypes = {
  ...Dropdown.propTypes,
};

DarkDropdown.defaultProps = {
  ...Dropdown.defaultProps,
  headerBackgroundColor: Color.Mirage,
  optionsBackgroundColor: Color.Mirage,
  headerTextColor: Color.White,
  headerBottomBorder: 'none',
  optionColor: Color.White,
  optionBorderColor: Color.Transparent,
  optionsBoxShadow: 'none',
  itemBottomBorder: 'none',
  optionsContainerBackgroundColor: Color.Mirage,
  headerBorderRadius: BorderRadius.StandardMenuItem,
  optionsContainerBorderRadius: BorderRadius.StandardMenuItem,
};
