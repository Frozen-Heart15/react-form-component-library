import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import {
  BorderRadius,
  Color,
  FontFamily,
  FontWeight,
  AlignItems,
  JustifyContent,
  FontSize,
} from '../../enums';

import {
  baseTemplate,
  baseStyledPropTypes,
  baseStyledDefaultProps,
  textTemplate,
  textStyledPropTypes,
  textStyledDefaultProps,
} from '../../templates';

const ButtonProto = styled.button`
  ${baseTemplate};
  ${textTemplate};

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    ${props => props?.styled?.hoverColor !== undefined && `color: ${props?.styled?.hoverColor};`}
    ${props => props?.styled?.hoverBackgroundColor !== undefined && `background-color: ${props?.styled?.hoverBackgroundColor};`}
    ${props => props?.styled?.hoverTextDecoration !== undefined && `text-decoration: ${props?.styled?.hoverTextDecoration};`}
	  cursor: pointer
  }

  &:disabled {
    ${props => props?.styled?.disabledColor !== undefined && `color: ${props?.styled?.disabledColor};`}
    ${props => props?.styled?.disabledBackgroundColor !== undefined && `background-color: ${props?.styled?.disabledBackgroundColor};`}
  }
`;

export const Button = props => (

  <ButtonProto
    styled={props}
    disabled={props.disabled}
    onClick={props.onPress}
    type={props.type}>

    { props.children || props.label }
  </ButtonProto>
);

Button.displayName = 'Button';

Button.propTypes = {
  ...baseStyledPropTypes,
  ...textStyledPropTypes,

  hoverTextDecoration: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
}

Button.defaultProps = {

  ...baseStyledDefaultProps,
  ...textStyledDefaultProps,

  height: '44px',
  width: '220px',
  fontSize: FontSize.Normal,
  fontFamily: FontFamily.Default,
  fontWeight: FontWeight.Bold,
  border: 'none',
  alignItems: AlignItems.Center,

  hoverTextDecoration: null,
  borderRadius: BorderRadius.Medium,
  color: Color.White,
  backgroundColor: Color.BrightTurquoise,
  hoverColor: Color.White,
  hoverBackgroundColor: Color.LightBlue,
  disabledColor: Color.White,
  justifyContent: JustifyContent.Center,
  disabledBackgroundColor: Color.MedGrey,

  disabled: false,
  label: '',
}
