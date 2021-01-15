import React from "react";
import { Text } from "@nulogy/components";

const IntroText = ({ children, ...props }) => (
  <Text fontSize="large" maxWidth="720px" color="darkGrey" {...props}>
    {children}
  </Text>
);

export default IntroText;
