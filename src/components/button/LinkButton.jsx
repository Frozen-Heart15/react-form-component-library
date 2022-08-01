import React from 'react';

import {
  Button,
} from './Button';

import {
  Color,
  TextDecorationLine,
  FontWeight,
} from '../../enums/enums';

export const LinkButton = props => (

  <Button
    {...props}/>
);

LinkButton.displayName = 'LinkButton';

LinkButton.propTypes = {
  ...Button.propTypes,
};

LinkButton.defaultProps = {
  ...Button.defaultProps,

  color: Color.BrightTurquoise,
  backgroundColor: Color.Transparent,
  hoverColor: Color.BrightTurquoise,
  hoverBackgroundColor: Color.Transparent,
  disabledColor: Color.MedGrey,
  disabledBackgroundColor: Color.Transparent,
  hoverTextDecoration: TextDecorationLine.Underline,
  width: 'auto',
  fontWeight: FontWeight.Normal,
};