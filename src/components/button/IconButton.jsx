import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  Button,
} from './Button';

import {
  Color,
} from '../../enums/enums';

const Icon = styled.img`
  ${props => props?.styled?.height !== undefined && `height: ${props?.styled?.height};`}
  ${props => props?.styled?.width !== undefined && `width: ${props?.styled?.width};`}
  ${props => props?.styled?.padding !== undefined && `padding: ${props?.styled?.padding};`}
`;

export const IconButton = props => {

  const iconStyled = {
    height: props.iconHeight,
    width: props.iconWidth,
    padding: props.iconPadding,
  }

  return (

    <Button
      {...props}>

      { props.iconSrc !== undefined &&

        <Icon
          styled={iconStyled}
          alt={props.iconAlt}
          src={props.iconSrc}/>
      }

      {props.label}
    </Button>
  );
};

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  ...Button.propTypes,

  iconAlt: PropTypes.string,
  iconSrc: PropTypes.string,
  iconHeight: PropTypes.string,
  iconWidth: PropTypes.string,
  iconPadding: PropTypes.string,
};

IconButton.defaultProps = {
  ...Button.defaultProps,

  backgroundColor: Color.Mirage,
  hoverBackgroundColor: Color.Mirage,
  disabledColor: Color.White,
  disabledBackgroundColor: Color.MedGrey,

  iconHeight: '32px',
  iconWidth: '32px',
  iconPadding: '0 20px 0 0',
  iconSrc: undefined,
};