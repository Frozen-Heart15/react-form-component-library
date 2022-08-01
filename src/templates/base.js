import PropTypes from 'prop-types';

import {
  css,
} from 'styled-components';

import {
  AlignContent,
  AlignItems,
  AlignSelf,
  BorderStyle,
  BoxSizing,
  Display,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Overflow,
  Position,
  UserSelect,
  Visibility,
} from '../enums/enums';

export const baseTemplate = css`

  ${props => props?.styled?.backfaceVisibility !== undefined && `backface-visibility: ${props?.styled?.backfaceVisibility};`}
  ${props => props?.styled?.opacity !== undefined && `opacity: ${props?.styled?.opacity};`}

  ${props => props?.styled?.background !== undefined && `background: ${props?.styled?.background};`}
  ${props => props?.styled?.backgroundColor !== undefined && `background-color: ${props?.styled?.backgroundColor};`}
  ${props => props?.styled?.backgroundImage !== undefined && `background-image: ${props?.styled?.backgroundImage};`}

  ${props => props?.styled?.display !== undefined && `display: ${props?.styled?.display};`}
  ${props => props?.styled?.position !== undefined && `position: ${props?.styled?.position};`}
  ${props => props?.styled?.boxSizing !== undefined && `box-sizing: ${props?.styled?.boxSizing};`}

  ${props => props?.styled?.top !== undefined && `top: ${props?.styled?.top};`}
  ${props => props?.styled?.right !== undefined && `right: ${props?.styled?.right};`}
  ${props => props?.styled?.bottom !== undefined && `bottom: ${props?.styled?.bottom};`}
  ${props => props?.styled?.left !== undefined && `left: ${props?.styled?.left};`}

  ${props => props?.styled?.minHeight !== undefined && `min-height: ${props?.styled?.minHeight};`}
  ${props => props?.styled?.minWidth !== undefined && `min-width: ${props?.styled?.minWidth};`}
  ${props => props?.styled?.height !== undefined && `height: ${props?.styled?.height};`}
  ${props => props?.styled?.width !== undefined && `width: ${props?.styled?.width};`}
  ${props => props?.styled?.maxHeight !== undefined && `max-height: ${props?.styled?.maxHeight};`}
  ${props => props?.styled?.maxWidth !== undefined && `max-width: ${props?.styled?.maxWidth};`}

  ${props => props?.styled?.flex !== undefined && `flex: ${props?.styled?.flex};`}
  ${props => props?.styled?.flexBasis !== undefined && `flex-basis: ${props?.styled?.flexBasis};`}
  ${props => props?.styled?.flexGrow !== undefined && `flex-grow: ${props?.styled?.flexGrow};`}
  ${props => props?.styled?.flexShrink !== undefined && `flex-shrink: ${props?.styled?.flexShrink};`}
  ${props => props?.styled?.flexDirection !== undefined && `flex-direction: ${props?.styled?.flexDirection};`}
  ${props => props?.styled?.flexWrap !== undefined && `flex-wrap: ${props?.styled?.flexWrap};`}
  ${props => props?.styled?.alignContent !== undefined && `align-content: ${props?.styled?.alignContent};`}
  ${props => props?.styled?.alignItems !== undefined && `align-items: ${props?.styled?.alignItems};`}
  ${props => props?.styled?.alignSelf !== undefined && `align-self: ${props?.styled?.alignSelf};`}
  ${props => props?.styled?.justifyContent !== undefined && `justify-content: ${props?.styled?.justifyContent};`}

  ${props => props?.styled?.margin !== undefined && `margin: ${props?.styled?.margin};`}
  ${props => props?.styled?.padding !== undefined && `padding: ${props?.styled?.padding};`}

  ${props => props?.styled?.border !== undefined && `border: ${props?.styled?.border};`}
  ${props => props?.styled?.borderColor !== undefined && `border-color: ${props?.styled?.borderColor};`}
  ${props => props?.styled?.borderRadius !== undefined && `border-radius: ${props?.styled?.borderRadius};`}
  ${props => props?.styled?.borderWidth !== undefined && `border-width: ${props?.styled?.borderWidth};`}
  ${props => props?.styled?.borderStyle !== undefined && `border-style: ${props?.styled?.borderStyle};`}

  ${props => props?.styled?.borderTop !== undefined && `border-top: ${props?.styled?.borderTop};`}
  ${props => props?.styled?.borderTopColor !== undefined && `border-top-color: ${props?.styled?.borderTopColor};`}
  ${props => props?.styled?.borderTopLeftRadius !== undefined && `border-top-left-radius: ${props?.styled?.borderTopLeftRadius};`}
  ${props => props?.styled?.borderTopRightRadius !== undefined && `border-top-right-radius: ${props?.styled?.borderTopRightRadius};`}
  ${props => props?.styled?.borderTopWidth !== undefined && `border-top-width: ${props?.styled?.borderTopWidth};`}

  ${props => props?.styled?.borderRight !== undefined && `border-right: ${props?.styled?.borderRight};`}
  ${props => props?.styled?.borderRightColor !== undefined && `border-right-color: ${props?.styled?.borderRightColor};`}
  ${props => props?.styled?.borderRightWidth !== undefined && `border-right-width: ${props?.styled?.borderRightWidth};`}

  ${props => props?.styled?.borderBottom !== undefined && `border-bottom: ${props?.styled?.borderBottom};`}
  ${props => props?.styled?.borderBottomColor !== undefined && `border-bottom-color: ${props?.styled?.borderBottomColor};`}
  ${props => props?.styled?.borderBottomLeftRadius !== undefined && `border-bottom-left-radius: ${props?.styled?.borderBottomLeftRadius};`}
  ${props => props?.styled?.borderBottomRightRadius !== undefined && `border-bottom-right-radius: ${props?.styled?.borderBottomRightRadius};`}
  ${props => props?.styled?.borderBottomWidth !== undefined && `border-bottom-width: ${props?.styled?.borderBottomWidth};`}

  ${props => props?.styled?.borderLeft !== undefined && `border-left: ${props?.styled?.borderLeft};`}
  ${props => props?.styled?.borderLeftColor !== undefined && `border-left-color: ${props?.styled?.borderLeftColor};`}
  ${props => props?.styled?.borderLeftWidth !== undefined && `border-left-width: ${props?.styled?.borderLeftWidth};`}

  ${props => props?.styled?.overflow !== undefined && `overflow: ${props?.styled?.overflow};`}
  ${props => props?.styled?.zIndex !== undefined && `z-index: ${props?.styled?.zIndex};`}

  ${props => props?.styled?.boxShadow !== undefined && `box-shadow: ${props?.styled?.boxShadow};`}
  ${props => props?.styled?.transition !== undefined && `transition: ${props?.styled?.transition};`}
  ${props => props?.styled?.animation !== undefined && `animation: ${props?.styled?.animation};`}
  ${props => props?.styled?.userSelect !== undefined && `user-select: ${props?.styled?.userSelect};`}
  ${props => props?.styled?.transform !== undefined && `transform: ${props?.styled?.transform};`}
  ${props => props?.styled?.outline !== undefined && `outline: ${props?.styled?.outline};`}
`;

export const baseStyledPropTypes = {

  backfaceVisibility: PropTypes.oneOf([...Object.values(Visibility)]),
  opacity: PropTypes.number,

  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,

  display: PropTypes.oneOf([...Object.values(Display)]),
  position: PropTypes.oneOf([...Object.values(Position)]),
  boxSizing: PropTypes.oneOf([...Object.values(BoxSizing)]),

  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,

  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,

  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexDirection: PropTypes.oneOf([...Object.values(FlexDirection)]),
  flexWrap: PropTypes.oneOf([...Object.values(FlexWrap)]),
  alignContent: PropTypes.oneOf([...Object.values(AlignContent)]),
  alignItems: PropTypes.oneOf([...Object.values(AlignItems)]),
  alignSelf: PropTypes.oneOf([...Object.values(AlignSelf)]),
  justifyContent: PropTypes.oneOf([...Object.values(JustifyContent)]),

  margin: PropTypes.string,
  padding: PropTypes.string,

  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.oneOf([...Object.values(BorderStyle)]),

  borderTop: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderTopLeftRadius: PropTypes.string,
  borderTopRightRadius: PropTypes.string,
  borderTopWidth: PropTypes.string,

  borderRight: PropTypes.string,
  borderRightColor: PropTypes.string,
  borderRightWidth: PropTypes.string,

  borderBottom: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderBottomLeftRadius: PropTypes.string,
  borderBottomRightRadius: PropTypes.string,
  borderBottomWidth: PropTypes.string,

  borderLeft: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderLeftWidth: PropTypes.string,

  overflow: PropTypes.oneOf([...Object.values(Overflow)]),
  zIndex: PropTypes.number,

  boxShadow: PropTypes.string,
  transition: PropTypes.string,
  animation: PropTypes.string,
  userSelect: PropTypes.oneOf([...Object.values(UserSelect)]),
  transform: PropTypes.string,
  outline: PropTypes.string,
};

export const baseStyledDefaultProps = {

  backfaceVisibility: Visibility.Visible,
  opacity: 1,
  display: Display.Flex,
  position: Position.Relative,
  flexWrap: FlexWrap.NoWrap,
  overflow: Overflow.Visible,
  userSelect: UserSelect.None,
};
