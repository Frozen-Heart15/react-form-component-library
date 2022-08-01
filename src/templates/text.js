import PropTypes from 'prop-types';

import {
  css,
} from 'styled-components';

import {
  Color,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  Hyphens,
  TextAlign,
  TextOverflow,
  TextTransform,
  VerticalAlign,
  WhiteSpace,
  WordBreak,
} from '../enums/enums';

export const textTemplate = css`

  ${props => props?.styled?.fontFamily !== undefined && `font-family: ${props?.styled?.fontFamily};`}
  ${props => props?.styled?.fontWeight !== undefined && `font-weight: ${props?.styled?.fontWeight};`}
  ${props => props?.styled?.fontStyle !== undefined && `font-style: ${props?.styled?.fontStyle};`}
  ${props => props?.styled?.fontSize !== undefined && `font-size: ${props?.styled?.fontSize};`}

  ${props => props?.styled?.color !== undefined && `color: ${props?.styled?.color};`}
  ${props => props?.styled?.lineHeight !== undefined && `line-height: ${props?.styled?.lineHeight};`}
  ${props => props?.styled?.letterSpacing !== undefined && `letter-spacing: ${props?.styled?.letterSpacing};`}
  ${props => props?.styled?.verticalAlign !== undefined && `vertical-align: ${props?.styled?.verticalAlign};`}
  ${props => props?.styled?.textAlign !== undefined && `text-align: ${props?.styled?.textAlign};`}
  ${props => props?.styled?.textDecoration !== undefined && `text-decoration: ${props?.styled?.textDecoration};`}
  ${props => props?.styled?.textTransform !== undefined && `text-transform: ${props?.styled?.textTransform};`}
  ${props => props?.styled?.whiteSpace !== undefined && `white-space: ${props?.styled?.whiteSpace};`}
  ${props => props?.styled?.textOverflow !== undefined && `text-overflow: ${props?.styled?.textOverflow};`}
  ${props => props?.styled?.hyphens !== undefined && `hyphens: ${props?.styled?.hyphens};`}
  ${props => props?.styled?.wordBreak !== undefined && `word-break: ${props?.styled?.wordBreak};`}
`;

export const textStyledPropTypes = {
  color: PropTypes.oneOf([...Object.values(Color)]),
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.oneOf([...Object.values(FontWeight)]),
  fontStyle: PropTypes.oneOf([...Object.values(FontStyle)]),
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  verticalAlign: PropTypes.oneOf([...Object.values(VerticalAlign)]),
  textAlign: PropTypes.oneOf([...Object.values(TextAlign)]),
  textDecoration: PropTypes.string,
  textTransform: PropTypes.oneOf([...Object.values(TextTransform)]),
  whiteSpace: PropTypes.oneOf([...Object.values(WhiteSpace)]),
  textOverflow: PropTypes.oneOf([...Object.values(TextOverflow)]),
  hyphens: PropTypes.oneOf([...Object.values(Hyphens)]),
  wordBreak: PropTypes.oneOf([...Object.values(WordBreak)]),
};

export const textStyledDefaultProps = {
  fontFamily: FontFamily.Default,
  fontSize: FontSize.Normal,
};
