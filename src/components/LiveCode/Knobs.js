import React from "React";
import styled from 'styled-components';
import { Box, Icon, Input, Tooltip, Flex, Link, Toggle, Text, Radio, RadioGroup, Select as NDSSelect, SelectOption } from "@nulogy/components";
import {PropTypes } from "react-view";
import Editor from "./Editor";

const ColorSelect = ({ labelText, options, value, onChange }) => {
  const Indicator = styled.span(({option, theme}) => ({
    borderRadius: "25%",
    background: theme.colors[option],
    lineHeight: "0",
    display: "inline-block",
    width: "10px",
    height: "10px",
    marginRight: "5px",
  }));
  const CustomOption = ({ children, ...props }) => {
    const newChildren = (
      <>
        <Indicator option={children} />
        {children}
      </>
    );
    return <SelectOption {...props}>{newChildren}</SelectOption>;
  };
  return (
    <NDSSelect
      value={value}
      labelText={labelText}
      placeholder="Pick a colour..."
      options={options}
      onChange={onChange}
      components={{
        Option: CustomOption,
      }}
      labelText={labelText}
    />
  );
};


const Select = styled.select(({ theme }) => ({
  width: "100%",
  height: "40px",
  border: `1px solid ${theme.colors.grey}`,
  borderRadius: theme.radii.medium,
  fontFamily: theme.fonts.base,
  fontSize: theme.fontSizes.medium,
  padding: theme.sizes.x1,
  appearance: "none",
  "&:focus": {
    outline: "none",
    boxShadow: theme.shadows.focus,
    borderColor: theme.colors.blue,
  }
}));


const InputBorder = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.colors.grey}`,
  borderRadius: theme.radii.medium,
  overflow: "hidden",
  "&:focus-within": {
    outline: "none",
    boxShadow: theme.shadows.focus,
    borderColor: theme.colors.blue,
  }
}));

const Label = ({ name, description }) => <Flex alignItems="center">
 {name}
 <Tooltip tooltip={description}><Icon icon="help" size="x2" color="darkGrey" pl="half"/></Tooltip>
</Flex>

const Spacing = ({children}) => <Box width={{small: "100%", medium: "calc(50% - 8px)"}} mt="x2">{children}</Box>;

const Knob = ({ name, description, set, type, value, options, error}) => { 
  switch (type) {
    case PropTypes.Ref:
      return (
        <Spacing>
          <Link
            href="https://reactjs.org/docs/refs-and-the-dom.html"
            target="_blank"
          >
            React Ref documentation
          </Link>
        </Spacing>
      );
    case PropTypes.String:
    case PropTypes.Date:
      return (
        <Spacing>
          <Input value={value} onChange={(e) => set(e.target.value, name)} labelText={<Label name={name} description={description} error={error} />} />
        </Spacing>
      );
    case PropTypes.Number:
      return (
        <Spacing>
          <Input type="number" value={value} onChange={(e) => set(e.target.value, name)} labelText={<Label name={name} description={description} error={error} />} />
        </Spacing>
      );            
    case PropTypes.Boolean:
      return (
        <Spacing>
          <Toggle
            toggled={Boolean(value)}
            onChange={() => {
              set(!value, name);
            }}
            labelText={<Label name={name} description={description}/>}
            error={error}
          />
        </Spacing>
      );
    case PropTypes.Enum:
      const optionsKeys = Object.keys(options);
      const numberOfOptions = optionsKeys.length;
      if (name === "color" || name === "bg") {
        const ndsSelectOptions = options.map((option) => ({
          value: option,
          label: option,
        }));
        const ndsHandleChange = (val) => {
          set(val, name)
        };
        return (
          <Spacing>
            <ColorSelect options={ndsSelectOptions} onChange={ndsHandleChange} value={value} labelText={<Label name={name} description={description} error={error} />} />
          </Spacing>
        );
      }
      return (
        <Spacing>
          {numberOfOptions <= 3 ? (
            <RadioGroup
              name={`radio-${name}`}
              onChange={e => set(e.target.value, name)}
              labelText={<Label name={name} description={description} error={error} />}
              value={value}
              error={error}
            >
              {options.map(option => (
                <Radio
                  key={option}
                  value={option}
                  labelText={option}
                />
              ))}
            </RadioGroup>
          ) : (
            <>
              <Text fontWeight="bold" mb="half" fontSize="small" mt="0"><Label name={name} description={description} /></Text>
              <Box position="relative">
                <Box position="absolute" right="5px" bottom="50%" transform="translateY(50%)" lineHeight="0" pointerEvents="none">
                  <Icon icon="downArrow" size="x3" color="grey" />
                </Box>
                <Select value={value} onChange={(e) => set(e.target.value, name)}>
                  {options.map(option => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </Select>
              </Box>
            </>
            )}
        </Spacing>
      );
    case PropTypes.ReactNode:
    case PropTypes.Function:
    case PropTypes.Array:
    case PropTypes.Object:
      return (
        <Spacing>
          <Text fontWeight="bold" mb="half" fontSize="small" mt="0"><Label name={name} description={description} /></Text>
          <InputBorder>
            <Editor
              onChange={code => {
                set(code, name);
              }}
              light
              code={value ? String(value) : ''}
            />
          </InputBorder>
        </Spacing>
      );      
    case PropTypes.Custom:
      return null;
    default:
      return console.error("unknown type:", type);
  }
};

const Knobs = ({state, set, error}) => {
  const allKnobs = Object.keys(state);
return (
  <Flex flexWrap="wrap" pb="x2" alignItems="flex-start" justifyContent="space-between">
    {allKnobs.map((name) => <Knob key={name} {...state[name]} name={name} set={set} error={error} />)}
  </Flex>);
}

export default Knobs;