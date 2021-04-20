import React from "React";
import { Box, Icon, Input, Tooltip, Flex, Link, Toggle } from "@nulogy/components";
import { PropTypes } from "react-view";


const PropLabel = ({ name, description }) => <Flex alignItems="center" mt="x2">
 {name}
 <Tooltip tooltip={description}><Icon icon="help" size="x2" color="darkGrey" pl="half"/></Tooltip>
</Flex>

const Spacing = ({children}) => <Box width="calc(50% - 8px)">{children}</Box>;

const Knob = ({ name, description, set, type, value}) => { 
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
    case PropTypes.ReactNode:
    case PropTypes.Function:
      return (
        <Spacing>
          <Input value={value} onChange={(e) => set(e.target.value, name)} labelText={<PropLabel name={name} description={description}/>} />
        </Spacing>
      );
    case PropTypes.Boolean:
      return (
        <Spacing>
          <Toggle
            checked={Boolean(value)}
            onChange={() => {
              set(!value);
            }}
            labelText={<PropLabel name={name} description={description}/>}
          />
        </Spacing>
      );
    case PropTypes.Enum:
      return (
        <Spacing>
        </Spacing>
      );
    case PropTypes.ReactNode:
    case PropTypes.Function:
    case PropTypes.Array:
    case PropTypes.Object:
      return (
        <Spacing>
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
  <Flex flexWrap="wrap" py="x2" justifyContent="space-between">
    {allKnobs.map((name) => <Knob key={name} {...state[name]} name={name} set={set} />)}
  </Flex>);
}

export default Knobs;