import { Overlay, Text, Box } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "Overlay",
  scope: {
    Overlay,
    Text,
    Box,
  },
  props: {
    children: {
      value: `
<Box borderRadius="medium" p="x3" bg="white">
  <Text>Foreground sample content</Text>
</Box>`,
      type: PropTypes.ReactNode,
      description: "Controls the theming.",
    },
    dark: {
      value: true,
      type: PropTypes.Boolean,
      description: "Controls the theming.",
    },
  },
};
