import React from 'react'
import styled from 'styled-components';
import { Flex } from "@nulogy/components";


const Button = styled.button(({theme}) => ({
  color: theme.colors.darkBlue,
  border: `1px solid ${theme.colors.grey}`,
  borderRadius: theme.radii.medium,
  fontSize: theme.fontSizes.small,
  padding: `${theme.sizes.half} ${theme.sizes.x2}`,
  marginTop: theme.sizes.x1,
  marginRight: theme.sizes.x1,
  marginBottom: theme.sizes.x2,
  background: "transparent",
  outline: "none",
  "&:hover": {
    backgrund: theme.colors.lightBlue,
  },
  "&:focus": {
    borderColor: theme.colors.blue,
    boxShadow: theme.shadows.focus
  }
}));

const ActionButtons = ({formatCode, copyCode, reset}) => {
  return <Flex>
    <Button onClick={formatCode}>Format</Button>
    <Button onClick={copyCode}>Copy</Button>
    <Button onClick={reset}>Reset</Button>
  </Flex>
};

export default ActionButtons;