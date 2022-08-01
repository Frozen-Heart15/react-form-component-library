import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  AlignItems,
  JustifyContent,
  Display,
  Margin,
  Color,
  FontFamily,
  FontSize,
  BorderRadius,
  BorderStyle,
} from '../enums';

import {
  baseTemplate,
  baseStyledPropTypes,
  baseStyledDefaultProps,
  textTemplate,
  textStyledPropTypes,
  textStyledDefaultProps,
} from '../templates';

const RadioItem = styled.input`
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
    position: absolute;
    height: 33%;
    width: 14%;
    ${props => props?.styled?.tickColor !== undefined && `border-color: ${props?.styled?.tickColor};`}
    border-style: solid;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
  }
`;

const RadioLabel = styled.label`
  ${textTemplate};
  display: ${Display.Flex};
  align-items: ${AlignItems.Center};
`;

export const RadioButton = props => (

  <RadioLabel
    styled={props}>

    <RadioItem
      type={'radio'}
      name={props.name}
      value={props.value}
      checked={props.checked}
      disabled={props.disabled}
      onClick={props.onClick}
      onChange={props.onChange}
      styled={props}
       />

    {props.labelText}
  </RadioLabel>
);

RadioButton.displayName = 'RadioButton';

RadioButton.propTypes = {
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

RadioButton.defaultProps = {
  ...baseStyledDefaultProps,
  ...textStyledDefaultProps,
  name: '',
  labelText: '',
  value: '',
  checked: false,
  disabled: false,
  onChange: () => {},
  onClick: () => {},
  appearance: 'none',
  margin: `${Margin.Small} ${Margin.Small} ${Margin.Small} 0`,
  width: '22px',
  height: '22px',
  borderWidth: '2px',
  borderStyle: BorderStyle.Solid,
  borderRadius: BorderRadius.Ellipse,
  tickColor: Color.White,
  tickBackgroundColor: Color.BrightTurquoise,
  alignItems: AlignItems.Center,
  justifyContent: JustifyContent.Center,
  fontFamily: FontFamily.Default,
  fontSize: FontSize.Small,
  color: Color.MedGrey,
};
