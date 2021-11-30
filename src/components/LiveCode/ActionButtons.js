import React from "react";
import styled from "styled-components";
import { Flex, Icon } from "@nulogy/components";
import { setupSandbox } from "../../utils/codesandbox";

const Button = styled.button(({ theme }) => ({
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
    background: theme.colors.lightBlue,
    cursor: "pointer",
  },
  "&:focus": {
    borderColor: theme.colors.blue,
    boxShadow: theme.shadows.focus,
  },
}));

const ActionButtons = ({
  formatCode,
  copyCode,
  reset,
  code,
  openInSandbox,
  componentName,
}) => {
  const handleOpenExample = async () => {
    const url = await setupSandbox(`NDS ${componentName} Example`, code);
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <Flex flexWrap="wrap">
      <Button onClick={formatCode}>Format</Button>
      <Button onClick={copyCode}>Copy</Button>
      <Button onClick={reset}>Reset</Button>
      {openInSandbox && (
        <Button onClick={handleOpenExample}>
          <Flex as="span" alignItems="center">
            <Icon icon="openInNew" size="14px" mr="x1" />
            Open in Code Sandbox
          </Flex>
        </Button>
      )}
    </Flex>
  );
};

export default ActionButtons;
