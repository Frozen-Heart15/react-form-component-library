import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  baseStyledDefaultProps,
  baseStyledPropTypes,
  baseTemplate,
  textStyledDefaultProps,
  textStyledPropTypes,
  textTemplate,
} from '../templates';

import {
  AlignItems,
  BorderStyle,
  BoxSizing,
  Color,
  Display,
  FlexDirection,
  FontWeight,
  FontSize,
  InputTypes,
  Position,
  TextAlign,
} from '../enums';

const MainContainer = styled.div`
  ${baseTemplate};

  display: ${Display.Flex};
  flex-direction: ${FlexDirection.Column};
`;

const InputContainer = styled.div`
  flex: 1;
  display: ${Display.Flex};
  flex-direction: ${FlexDirection.Row};
  align-items: ${AlignItems.Center};
  border-color: ${props => props.focused && props.focusBorderColor || props.borderColor};
  margin: 5px 0;
  border-style: ${BorderStyle.Solid};
  border-width: ${props => props.borderWidth};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
`;

const InputBox = styled.input`
  ${textTemplate};

  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
  background-color: ${Color.Transparent};
  box-sizing: ${BoxSizing.BorderBox};
  flex: 1;
`;

const Text = styled.p`
  ${textTemplate};

  flex: 0;
  ${props => props?.styled?.margin !== undefined && `margin: ${props?.styled?.margin};`}
`;

const Icon = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin};
  position: ${Position.Absolute};
  right: 0;
  flex: 0;
`;

export const Input = props => {

  const [
    focused,
    setFocused,
  ] = React.useState(false);

  return (

    <MainContainer
      styled={props}>

      <Text //Label
        styled={{
          ...props,
          textAlign: props.labelTextAlign,
          fontSize: props.labelFontSize,
          fontWeight: props.labelFontWeight,
          color: props.labelColor,
          margin: props.labelTextMargin,
        }}>

        {props.labelText}
      </Text>

      <InputContainer
        borderRadius={props.inputBorderRadius}
        borderWidth={props.inputBorderWidth}
        focusBorderColor={props.focusBorderColor}
        borderColor={props.inputBorderColor}
        backgroundColor={props.inputBackgroundColor}
        focused={focused}>

        { props.showPrefix &&

          <Text //Prefix
            styled={{
              ...props,
              margin: props.prefixMargin,
              fontSize: props.prefixFontSize,
              color: props.prefixColor,
            }}>

            {props.prefix}
          </Text>
        }

        <InputBox
          styled={props}
          fontSize={props.inputBoxFontSize}
          padding={props.inputBoxPadding}
          type={(props.type === InputTypes.Password && props.showPassword && InputTypes.Text) || props.type}
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          readOnly={props.readOnly}
          maxLength={props.maxLength}
          min={props.min}
          max={props.max}
          step={props.step}
          onFocus={() => {
            setFocused(true);
            typeof props.onFocus === 'function' && props.onFocus();
          }}
          onBlur={() => {
            setFocused(false);
            typeof props.onBlur === 'function' && props.onBlur();
          }} />

        { props.showIcon &&

          <Icon
            onClick={!props.disabled && props.onIconClick}
            src={props.iconSrc}
            width={props.iconWidth}
            height={props.iconHeight}
            margin={props.iconMargin} />
        }
      </InputContainer>

      { !!props.showRequiredText && !props.showValidationText &&

        <Text //Required Indicator
          styled={{
            ...props,
            color: props.requiredTextColor,
            margin: props.requiredTextMargin,
            fontSize: props.requiredTextFontSize,
          }}>

          {props.requiredText}
        </Text>
      }

      { !!props.showValidationText &&

        <Text //Validation Indicator
          styled={{
            ...props,
            color: props.validationTextColor,
            margin: props.validationTextMargin,
            fontSize: props.validationTextFontSize,
          }}>

          {props.validationText}
        </Text>
      }

    </MainContainer>
  );
};

Input.displayName = 'Input';

Input.defaultProps = {
  ...baseStyledDefaultProps,
  ...textStyledDefaultProps,
  labelText: '',
  labelColor: Color.Black,
  labelFontSize: FontSize.Big,
  labelFontWeight: FontWeight.Bold,
  labelTextAlign: TextAlign.Left,
  labelTextMargin: '0',
  placeholder: 'Enter text',
  validationText: '',
  showValidationText: false,
  validationTextColor: Color.Negative,
  validationTextFontSize: FontSize.Small,
  validationTextMargin: '0',
  requiredText: 'This field is required',
  showRequiredText: false,
  requiredTextColor: Color.MedGrey,
  requiredTextFontSize: FontSize.Small,
  requiredTextMargin: '0',
  focusBorderColor: Color.MedGrey,
  inputBorderColor: Color.MedGrey,
  iconSrc: '',
  showIcon: false,
  type: InputTypes.Text,
  required: false,
  showPassword: false,
  disabled: false,
  readOnly: false,
  maxLength: 255,
  min: 0,
  max: 100,
  step: 1,
  iconHeight: '45%',
  iconMargin: '0 10px 0 0',
  prefix: '',
  showPrefix: false,
  prefixColor: Color.BrightTurquoise,
  prefixMargin: '0 0 0 20px',
  prefixFontSize: FontSize.Normal,
  inputBoxPadding: '20px',
  inputBoxFontSize: FontSize.Small,
  inputBorderWidth: '1px',
  inputBorderRadius: '7px',
  inputBackgroundColor: Color.White,
};

Input.propTypes = {
  ...baseStyledPropTypes,
  ...textStyledPropTypes,
  labelText: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelFontWeight: PropTypes.string,
  labelTextAlign: PropTypes.string,
  labelTextMargin: PropTypes.string,
  placeholder: PropTypes.string,
  validationText: PropTypes.string,
  validationTextColor: PropTypes.string,
  validationTextFontSize: PropTypes.string,
  validationTextMargin: PropTypes.string,
  showValidationText: PropTypes.bool,
  requiredText: PropTypes.string,
  requiredTextColor: PropTypes.string,
  requiredTextFontSize: PropTypes.string,
  requiredTextMargin: PropTypes.string,
  showRequiredText: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  type: PropTypes.oneOf(Object.values(InputTypes)),
  focusBorderColor: PropTypes.string,
  inputBorderColor: PropTypes.string,
  required: PropTypes.bool,
  showPassword: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onIconClick: PropTypes.func,
  onFocus: PropTypes.func,
  iconSrc: PropTypes.string,
  showIcon: PropTypes.bool,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconMargin: PropTypes.string,
  prefix: PropTypes.string,
  showPrefix: PropTypes.bool,
  prefixColor: PropTypes.string,
  prefixMargin: PropTypes.string,
  prefixFontSize: PropTypes.string,
  inputBoxPadding: PropTypes.string,
  inputBoxFontSize: PropTypes.string,
  inputBorderWidth: PropTypes.string,
  inputBorderRadius: PropTypes.string,
  inputBackgroundColor: PropTypes.string,
};
