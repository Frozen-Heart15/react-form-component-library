import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  Color,
  FontWeight,
  FlexDirection,
  AlignItems,
  Display,
  FontSize,
  Visibility,
  Position,
  TransitionDuration,
  BorderRadius,
  Margin,
} from '../enums';

import {
  baseTemplate,
  textTemplate,
  textStyledDefaultProps,
  baseStyledDefaultProps,
  textStyledPropTypes,
  baseStyledPropTypes,
} from '../templates';

const ToggleContainer = styled.label`
  ${baseTemplate};

  display: ${Display.Flex};
  flex-direction: ${FlexDirection.Row};
  align-items: ${AlignItems.Center};
`;

const Switch = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.checked && Color.BrightTurquoise || Color.MedGrey};
  display: ${Display.Flex};
  flex-direction: ${FlexDirection.Row};
  align-items: ${AlignItems.Center};
  transition: background-color ${TransitionDuration.Standard};
  cursor: pointer;
`;

const Slider = styled.div`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  cursor: pointer;
`;

const Label = styled.p`
  ${textTemplate};

  flex: 1;
  margin: ${props => props.margin};
`;

const HiddenCheckbox = styled.input`
  visibility: ${Visibility.Hidden};
  position: ${Position.Absolute};
`;

const Spacer = styled.div`
  visibility: ${Visibility.Hidden};
  flex-grow: ${props => props.checked && 1 || 0};
  transition: flex-grow ${TransitionDuration.Standard};
`;

export const Toggle = props => (
  <ToggleContainer
    styled={props}>

    <HiddenCheckbox
      type={'checkbox'}
      checked={props.checked}
      onChange={props.onChange}
      disabled={props.readOnly} />

    <Switch
      checked={props.checked}
      width={props.switchWidth}
      height={props.switchHeight}
      borderRadius={props.switchBorderRadius}>

      <Spacer
        checked={props.checked} />

      <Slider
        checked={props.checked}
        margin={props.sliderMargin}
        width={props.sliderWidth}
        height={props.sliderHeight}
        backgroundColor={props.sliderColor}
        borderRadius={props.sliderBorderRadius} />

    </Switch>

    { !!props.labelText &&

      <Label
        styled={props}
        margin={props.labelMargin}>

        {props.labelText}

      </Label>
    }

  </ToggleContainer>
);

Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  ...baseStyledDefaultProps,
  ...textStyledDefaultProps,
  width: '250px',
  fontSize: FontSize.Big,
  fontWeight: FontWeight.Bold,
  sliderMargin: '0 3px 0 3px',
  sliderWidth: '30px',
  sliderHeight: '30px',
  sliderColor: Color.White,
  sliderBorderRadius: BorderRadius.Ellipse,
  switchWidth: '60px',
  switchHeight: '36px',
  switchBorderRadius: '30px',
  labelMargin: `0 0 0 ${Margin.Medium}`,
  readOnly: false,
};

Toggle.propTypes = {
  ...baseStyledPropTypes,
  ...textStyledPropTypes,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  sliderMargin: PropTypes.string,
  sliderWidth: PropTypes.string,
  sliderHeight: PropTypes.string,
  sliderColor: PropTypes.oneOf(Object.values(Color)),
  sliderBorderRadius: PropTypes.string,
  switchWidth: PropTypes.string,
  switchHeight: PropTypes.string,
  switchBorderRadius: PropTypes.string,
  labelText: PropTypes.string,
  labelMargin: PropTypes.string,
  readOnly: PropTypes.bool,
};
