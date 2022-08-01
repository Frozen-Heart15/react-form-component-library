import React from 'react';

import {
  Dropdown,
  DarkDropdown,
} from '../components';


export default {
  title: 'Dropdown',
  component: Dropdown,
  // argTypes: {
  //   ...baseTemplateArgTypes,
  //   containerHeight: generateNumberArgType({
  //     type: ControlType.Range,
  //     min: 100,
  //     max: 750,
  //     step: 5,
  //   }),
  //   containerWidth: generateNumberArgType({
  //     type: ControlType.Range,
  //     min: 100,
  //     max: 750,
  //     step: 5,
  //   }),
  // }
};

import {
  AlignItems,
  Color,
  Position,
} from '../enums';

// const Container = styled.div`
//   ${baseTemplate};

//   display: ${Display.Flex};
// `;

const textOptions = [
  {
    key: 1,
    value: 'Salary',
    display: 'Salary',
  },
  {
    key: 2,
    value: 'Allowance',
    display: 'Allowance',
  },
  {
    key: 3,
    value: 'Pension',
    display: 'Pension',
  },
  {
    key: 4,
    value: 'Other',
    display: 'Other',
  },
];

// const overflowTextOptions = [...new Array(8)].map((_, index) => {
//   const value = `Option Very Long ${index}`;

//   return {
//     key: index,
//     value,
//     display: value,
//   };
// });

// const getComponentOptions = (color) => [
//   {
//     key: 1,
//     value: 'flag',
//     display: (
//       <CountryFlag
//         currencyCode={CurrencyCode.ZA}
//         color={color} />
//     ),
//     displayCollapsed: (
//       <CountryFlag
//         currencyCode={CurrencyCode.ZA}
//         hideCurrencyCode={true}
//         color={color} />
//     ),
//   },
//   {
//     key: 2,
//     value: 'flag',
//     display: (
//       <CountryFlag
//         currencyCode={CurrencyCode.US}
//         color={color} />
//     ),
//     displayCollapsed: (
//       <CountryFlag
//         currencyCode={CurrencyCode.US}
//         hideCurrencyCode={true}
//         color={color} />
//     ),
//   },
//   {
//     key: 3,
//     value: 'flag',
//     display: (
//       <CountryFlag
//         currencyCode={CurrencyCode.GB}
//         color={color} />
//     ),
//     displayCollapsed: (
//       <CountryFlag
//         currencyCode={CurrencyCode.GB}
//         hideCurrencyCode={true}
//         color={color} />
//     ),
//   },
// ];

const baseArgs = {
  ...Dropdown.defaultProps,
};

export const TextDropdown = (props) => {

  const [
    state,
    setState,
  ] = React.useState({
    collapsed: true,
    selected: null,
  });

  return (

    <Dropdown
      {...props}
      options={textOptions}
      showContent={!state.collapsed}
      onHeaderPress={() => setState(prevState => ({
        ...prevState,
        collapsed: !prevState.collapsed,
      }))}
      onClick={value => {
        setState(prevState => ({
          ...prevState,
          selected: value,
          collapsed: !prevState.collapsed,
        }));
      }}
      selected={state.selected} />
  );
};

TextDropdown.args = {
  ...baseArgs,
};

// const lightDropdownOptions = getComponentOptions(Color.Black);

// export const LightVariation = props => {

//   const [
//     state,
//     setState,
//   ] = React.useState({
//     collapsed: true,
//     selected: undefined,
//   });

//   return (

//     <Dropdown
//       {...props}
//       options={lightDropdownOptions}
//       showContent={!state.collapsed}
//       onHeaderPress={() => setState(prevState => ({
//         ...prevState,
//         collapsed: !prevState.collapsed,
//       }))}
//       onClick={value => {
//         setState(prevState => ({
//           ...prevState,
//           selected: value,
//           collapsed: !prevState.collapsed,
//         }));
//       }}
//       selected={state.selected}
//       itemBottomBorder={'none'}
//       optionsContainerBorderRadius={'20px'} />
//   );
// };

// LightVariation.args = {
//   ...baseArgs,
// };

// const darkDropdownOptions = getComponentOptions(Color.White);

export const DarkVariation = props => {

  const [
    state,
    setState,
  ] = React.useState({
    collapsed: true,
    selected:null,
  });

  return (
    <DarkDropdown
      {...props}
      options={textOptions}
      showContent={!state.collapsed}
      onHeaderPress={() => setState(prevState => ({
        ...prevState,
        collapsed: !prevState.collapsed,
      }))}
      onClick={value => {
        setState(prevState => ({
          ...prevState,
          selected: value,
          collapsed: !prevState.collapsed,
        }));
      }}
      selected={state.selected} />
  );
};

DarkVariation.args = {
  ...DarkDropdown.defaultProps,
};

// export const OverflowDropdown = args => {

//   const [
//     state,
//     setState,
//   ] = React.useState({
//     collapsed: true,
//     selected: null,
//   });

//   return (

//     <Container
//       top={'0'}
//       left={'0'}
//       position={Position.Absolute}
//       minHeight={`${args.containerHeight}px`}
//       minWidth={`${args.containerWidth}px`}
//       backgroundColor={Color.LightGrey}
//       alignItems={AlignItems.Start}>

//       <Dropdown
//         {...args}
//         margin={'20px'}
//         containerRect={{
//           width: args.containerWidth,
//           height: args.containerHeight,
//         }}
//         options={overflowTextOptions}
//         showContent={!state.collapsed}
//         onHeaderPress={() => setState(prevState => ({
//           ...prevState,
//           collapsed: args.disabled || !prevState.collapsed,
//         }))}
//         onClick={value => {
//           setState(prevState => ({
//             ...prevState,
//             selected: value,
//             collapsed: !prevState.collapsed,
//           }));
//         }}
//         selected={state.selected} />
//     </Container>
//   );
// };

// OverflowDropdown.args = {
//   ...baseArgs,
//   containerHeight: 500,
//   containerWidth: 500,
//   width: '200px',
// };