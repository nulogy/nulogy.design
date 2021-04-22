import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Table, Text } from "@nulogy/components";
import { CODE_WIDTH } from "./CONSTANTS";

const InlineCode = styled.span(({ theme }) => ({
  display: "inline",
  fontFamily: theme.fonts.mono,
  background: theme.colors.lightBlue,
  fontSize: theme.fontSizes.small
}));

export const propName = ({ cellData }) => (
  <Text py="x1" fontSize="small">
    <InlineCode>{cellData}</InlineCode>
  </Text>
);

propName.propTypes = {
  cellData: PropTypes.string.isRequired
};

export const smallTextRenderer = ({ cellData }) => (
  <Text py="x1" fontSize="small">
    {cellData}
  </Text>
);

smallTextRenderer.propTypes = {
  cellData: PropTypes.string.isRequired
};

const columns = [
  {
    label: "Name",
    dataKey: "name",
    width: "20%",
    cellRenderer: propName
  },
  {
    label: "Type",
    dataKey: "type",
    width: "10%",
    cellRenderer: smallTextRenderer
  },
  {
    label: "Default",
    dataKey: "default",
    width: "15%",
    cellRenderer: smallTextRenderer
  },
  {
    label: "Description",
    dataKey: "description",
    width: "50%",
    cellRenderer: smallTextRenderer
  }
];

const PropsTable = ({ propsConfig }) => {

  const propsArr = Object.keys(propsConfig).reduce((acc, prop) => [
    ...acc,
    {
      name: prop,
      ...propsConfig[prop],
    }
  ], []);
  return <Box maxWidth={CODE_WIDTH} margin="0 auto 16px auto"><Table rows={propsArr} columns={columns} keyField="name" rowHovers={false} mb="x2" /></Box>
};

export default PropsTable;