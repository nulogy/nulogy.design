import React from "React";
import { Box, Icon, Input, Tooltip, Flex, Link, Toggle, Text, Radio, RadioGroup } from "@nulogy/components";
import {PropTypes } from "react-view";
import Editor from "./Editor";


const Label = ({ name, description }) => <Flex alignItems="center">
 {name}
 <Tooltip tooltip={description}><Icon icon="help" size="x2" color="darkGrey" pl="half"/></Tooltip>
</Flex>

const Spacing = ({children}) => <Box width="calc(50% - 8px)" mt="x2">{children}</Box>;

const Knob = ({ name, description, set, type, value, options}) => { 
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
    case PropTypes.Number:
      return (
        <Spacing>
          <Input value={value} onChange={(e) => set(e.target.value, name)} labelText={<Label name={name} description={description}/>} />
        </Spacing>
      );
    case PropTypes.Boolean:
      return (
        <Spacing>
          <Toggle
            toggled={Boolean(value)}
            onChange={() => {
              set(!value);
            }}
            labelText={<Label name={name} description={description}/>}
          />
        </Spacing>
      );
    case PropTypes.Enum:
      const optionsKeys = Object.keys(options);
      const numberOfOptions = optionsKeys.length;
      const selectOptions = optionsKeys.map(key => ({
        id: key,
        option: options[key],
      }));
      const valueKey = value && String(value).split('.')[1];
      return (
        <Spacing>
          {numberOfOptions < 4 ? (
            <RadioGroup
              name={`radio-${name}`}
              onChange={e => set(e.target.value)}
              labelText={name}
              value={String(value)}
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
            <select value={value} onChange={(e) => set(e.target.value)}>
              {options.map(option => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
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
          <Box border="1px solid" borderColor="grey" borderRadius="medium" overflow="hidden">
            <Editor
              onChange={code => {
                set(code);
              }}
              light
              code={value ? String(value) : ''}
            />
          </Box>
        </Spacing>
      );
    case PropTypes.Custom:
      return null;
    default:
      return console.error("unknown type:", type);
  }
};

const Knobs = ({state, set, error}) => {
  console.log("state", state);
  const allKnobs = Object.keys(state);
return (
  <Flex flexWrap="wrap" pb="x2" alignItems="flex-start" justifyContent="space-between">
    {allKnobs.map((name) => <Knob key={name} {...state[name]} name={name} set={set} />)}
  </Flex>);
}

export default Knobs;