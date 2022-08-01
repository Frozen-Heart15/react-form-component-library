import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  AlignItems,
  JustifyContent,
  Display,
  Color,
  FontSize,
  FontFamily,
  BorderStyle,
  Position,
} from '../enums';

import {
  baseTemplate,
  baseStyledPropTypes,
  baseStyledDefaultProps,
  textTemplate,
  textStyledPropTypes,
  textStyledDefaultProps,
} from '../templates';

const CheckboxItem = styled.input`
  ${baseTemplate}
  ${props => props?.styled?.appearance !== undefined && `appearance: ${props?.styled?.appearance};`}
  ${props => props?.styled?.tickBackgroundColor !== undefined && `border-color: ${props?.styled?.tickBackgroundColor};`}

  &:checked::before {
    content: '';
    width: 90%;
    height: 90%;
    ${props => props?.styled?.borderRadius !== undefined && `border-radius: ${props?.styled?.borderRadius};`}
    ${props => props?.styled?.tickBackgroundColor !== undefined && `background-color: ${props?.styled?.tickBackgroundColor};`}
    color: ${Color.White};
  }

  &:checked::after {
    content: '';
    position: ${Position.Absolute};
    height: 40%;
    width: 14%;
    ${props => props?.styled?.tickColor !== undefined && `border-color: ${props?.styled?.tickColor};`}
    border-style: ${BorderStyle.Solid};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
  }
`;

const CheckboxLabel = styled.label`
  ${textTemplate};
  display: ${Display.Flex};
  align-items: ${AlignItems.Center};
`;

export const Checkbox = props => (

  <CheckboxLabel
    styled={props}>

    <CheckboxItem
      type={'checkbox'}
      name={props.name}
      value={props.value}
      checked={props.checked}
      disabled={props.disabled}
      onChange={props.onChange}
      styled={props} />

    {props.labelText}
  </CheckboxLabel>
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  ...baseStyledPropTypes,
  ...textStyledPropTypes,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  appearance: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  tickColor: PropTypes.string,
  tickBackgroundColor: PropTypes.string,
};

Checkbox.defaultProps = {
  ...baseStyledDefaultProps,
  ...textStyledDefaultProps,
  name: '',
  labelText: '',
  value: '',
  checked: false,
  disabled: false,
  onChange: () => {},
  appearance: 'none',
  margin: '10px 10px 10px 0',
  width: '22px',
  height: '22px',
  borderWidth: '2px',
  borderStyle: BorderStyle.Solid,
  borderRadius: '25%',
  tickColor: Color.White,
  tickBackgroundColor: Color.BrightTurquoise,
  alignItems: AlignItems.Center,
  justifyContent: JustifyContent.Center,
  fontFamily: FontFamily.Default,
  fontSize: FontSize.Small,
  color: Color.MedGrey,
};
