import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import {
  Color,
  Display,
  FontFamily,
  AlignItems,
  JustifyContent,
  BoxSizing,
  FlexDirection,
  TextAlign,
  Visibility,
  Position,
  Overflow,
  Margin,
  BorderStyle,
  FontSize,
  TransitionDuration,
  PointerEvents,
} from '../../enums';

import {
  baseTemplate,
  baseStyledPropTypes,
  baseStyledDefaultProps,
  textTemplate,
  textStyledDefaultProps,
  textStyledPropTypes,
} from '../../templates';

const SelectContainer = styled.div`
  ${baseTemplate};

  pointer-events: ${props => props.disabled && PointerEvents.None || undefined};
  display: ${Display.Flex};
  flex-direction: ${FlexDirection.Column};
  position: ${Position.Relative};
`;

const HeaderContainer = styled.div`
  padding: ${props => props.padding};
  display: ${Display.Flex};
  align-items: ${AlignItems.Center};
  justify-content: ${JustifyContent.SpaceBetween};
  cursor: pointer;
  border-bottom: ${props => props.bottomBorder};
  min-width: ${props => props.width};
  min-height: ${props => props.height};
  box-sizing: ${BoxSizing.BorderBox};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
`;

const Header = styled.div`
  ${textTemplate};

  color: ${props => props.color};
  font-family: ${FontFamily.Default};
  margin: ${Margin.None};
  margin-left: ${Margin.XSmall};
`;

const ChevronContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  line-height: ${props => props.lineHeight};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  text-align: ${TextAlign.Center};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

const OptionsContainer = styled.ul`
  border-radius: ${props => props.borderRadius};
  position: ${Position.Absolute};
  top: ${props => props.top};
  display: ${Display.Flex};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
  height: auto;
  width: 100%;
  overflow: ${Overflow.Auto};
  visibility: ${props => props.showContent && Visibility.Visible || Visibility.Hidden};
  transform: translateY(${props => props.showContent && '0' || '-5px'});
  flex-direction: ${FlexDirection.Column};
  opacity: ${props => props.showContent ? '1' : '0'};
  padding: 0;
  transition: opacity ${TransitionDuration.Standard}, visibility ${TransitionDuration.Standard}, transform ${TransitionDuration.Standard};
  box-shadow: ${props => props.boxShadow};
  background-color: ${props => props.backgroundColor};
  margin: ${Margin.None};
  box-sizing: ${BoxSizing.BorderBox};
  z-index: 100;
`;

const Options = styled.li`
  ${textTemplate};

  font-family: ${FontFamily.Default};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBackgroundColor};
    cursor: pointer;
  }
`;

const Item = styled.div`
  ${textTemplate};

  margin: ${Margin.None} ${Margin.XSmall};
  padding: 12px 8px 12px 0;
  border-bottom: ${props => props.bottomBorder};
`;

export const Dropdown = props => {

  const optionsContainerRef = React.useRef();
  const selectContainerRef = React.useRef();

  const [
    state,
    setState,
  ] = React.useState({
    optionsContainerTop: '0px',
    optionsContainerMaxWidth: undefined,
    optionsContainerMaxHeight: undefined,
    defaultHeight: undefined,
  });

  React.useEffect(() => {

    const optionsRect = optionsContainerRef?.current?.getBoundingClientRect();

    if (!optionsRect || optionsRect.height === state.defaultHeight) {
      return;
    }

    setState(prevState => ({
      ...prevState,
      defaultHeight: optionsRect.height,
    }));
  });

  React.useEffect(() => {

    if (!state.defaultHeight) {
      return;
    }

    const optionsRect = optionsContainerRef?.current?.getBoundingClientRect();
    const selectRect = selectContainerRef?.current?.getBoundingClientRect();
    const scrollableOptions = optionsContainerRef?.current?.scrollHeight > optionsContainerRef?.current?.clientHeight;

    if (!optionsRect || !selectRect) {
      return;
    }

    let containerRect = (!!props.containerRect && props.containerRect) || {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (!containerRect.top) {
      containerRect.top = 0;
    }

    setState(prevState => ({
      ...prevState,
      optionsContainerMaxWidth: `${containerRect.width - selectRect.left}px`,
      optionsContainerMaxHeight: `${containerRect.height}px`,
      optionsContainerTop: (scrollableOptions || (selectRect.top + state.defaultHeight > containerRect.height + containerRect.top))
        && `${containerRect.height - optionsRect.height - selectRect.top + containerRect.top}px`
        || '0px',
    }));
  }, [
    state.defaultHeight,
    props.containerRect,
  ]);

  const getOptions = () => {

    const arr = [];

    for (let index = 0; index < props.options.length; index++) {

      const option = props.options[index];
      arr.push(
        <Options
          color={props.optionColor}
          borderColor={props.optionBorderColor}
          hoverColor={props.optionHoverColor}
          hoverBackgroundColor={props.optionHoverBackgroundColor}
          backgroundColor={props.optionsBackgroundColor}
          key={option.key}
          value={option.value}
          onClick={() => !props.disabled && typeof props.onClick === 'function' && props.onClick(option)}>

          <Item
            bottomBorder={props.itemBottomBorder}>

            {option.display}
          </Item>
        </Options>,
      );
    }
    return arr;
  };

  const renderHeaderContent = () => {

    return props.selected?.displayCollapsed || props.selected?.display || props.headerText;
  };

  return (
    <SelectContainer
      ref={selectContainerRef}
      styled={props}
      disabled={props.disabled}
      width={props.width}>

      <HeaderContainer
        padding={props.headerContainerPadding}
        onClick={() => !props.disabled && typeof props.onHeaderPress === 'function' && props.onHeaderPress()}
        showContent={props.showContent}
        width={props.headerWidth}
        height={props.headerHeight}
        backgroundColor={props.headerBackgroundColor}
        bottomBorder={props.headerBottomBorder}
        borderRadius={props.headerBorderRadius}>

        <Header
          styled={props}
          color={props.headerTextColor}>

          {renderHeaderContent()}
        </Header>

        <ChevronContainer
          color={props.chevronColor}
          backgroundColor={props.chevronBackgroundColor}
          padding={props.chevronPadding}
          fontSize={props.chevronFontSize}
          width={props.chevronWidth}
          height={props.chevronHeight}>

          {(!props.disabled && props.showContent) && props.chevronUp || props.chevronDown}
        </ChevronContainer>
      </HeaderContainer>

      <OptionsContainer
        top={state.optionsContainerTop}
        ref={optionsContainerRef}
        type={'none'}
        maxHeight={state.optionsContainerMaxHeight}
        maxWidth={state.optionsContainerMaxWidth}
        padding={props.optionsContainerPadding}
        showContent={!props.disabled && props.showContent}
        backgroundColor={props.optionsContainerBackgroundColor}
        boxShadow={props.optionsBoxShadow}
        borderRadius={props.optionsContainerBorderRadius}>

        {getOptions()}
      </OptionsContainer>
    </SelectContainer>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  ...baseStyledPropTypes,
  ...textStyledPropTypes,
  chevronBackgroundColor: PropTypes.oneOf(Object.values(Color)),
  chevronColor: PropTypes.oneOf(Object.values(Color)),
  chevronDown: PropTypes.string.isRequired,
  chevronFontSize: PropTypes.string.isRequired,
  chevronPadding: PropTypes.string,
  chevronUp: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  headerBackgroundColor: PropTypes.oneOf(Object.values(Color)),
  headerBorderRadius: PropTypes.string,
  headerBottomBorder: PropTypes.string.isRequired,
  headerContainerPadding: PropTypes.string.isRequired,
  headerHeight: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  headerTextColor: PropTypes.oneOf(Object.values(Color)),
  headerWidth: PropTypes.string.isRequired,
  itemBottomBorder: PropTypes.string,
  onHeaderPress: PropTypes.func,
  optionBorderColor: PropTypes.oneOf(Object.values(Color)),
  optionColor: PropTypes.oneOf(Object.values(Color)),
  optionHoverBackgroundColor: PropTypes.oneOf(Object.values(Color)),
  optionHoverColor: PropTypes.oneOf(Object.values(Color)),
  options: PropTypes.array.isRequired,
  optionsBackgroundColor: PropTypes.oneOf(Object.values(Color)),
  optionsBoxShadow: PropTypes.string,
  optionsContainerBackgroundColor: PropTypes.oneOf(Object.values(Color)),
  optionsContainerBorderRadius: PropTypes.string,
  optionsContainerPadding: PropTypes.string,
  selected: PropTypes.shape({
    displayCollapsed: PropTypes.node,
    display: PropTypes.node,
  }),
  showContent: PropTypes.bool.isRequired,
  containerRect: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

Dropdown.defaultProps = {
  ...baseStyledDefaultProps,
  ...textStyledDefaultProps,
  width: '200px',
  chevronBackgroundColor: Color.Transparent,
  chevronColor: Color.BrightTurquoise,
  chevronDown: '\u25BC',
  chevronFontSize: FontSize.Smallest,
  chevronPadding: '0px',
  chevronUp: '\u25B2',
  disabled: false,
  headerBackgroundColor: Color.White,
  headerBorderRadius: '0',
  headerBottomBorder: `2px ${BorderStyle.Solid} ${Color.MedGrey}`,
  headerContainerPadding: '8px 8px 8px 0',
  headerHeight: '30px',
  headerText: 'Select',
  headerTextColor: Color.MedGrey,
  headerWidth: '20px',
  itemBottomBorder: `1px ${BorderStyle.Solid} ${Color.MedGrey}`,
  onHeaderPress: undefined,
  optionBorderColor: Color.MedGrey,
  optionColor: Color.Black,
  optionHoverBackgroundColor: Color.BrightTurquoise,
  optionHoverColor: Color.White,
  options: [],
  optionsBackgroundColor: Color.White,
  optionsBoxShadow: `1px 1px 8px 3px ${Color.MedGrey}`,
  optionsContainerBackgroundColor: Color.White,
  optionsContainerBorderRadius: '0',
  optionsContainerPadding: '8px 15px',
  selected: null,
  showContent: false,
};
