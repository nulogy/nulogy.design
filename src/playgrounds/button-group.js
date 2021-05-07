import { ButtonGroup, Button, PrimaryButton } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "ButtonGroup",
  scope: {
    ButtonGroup,
    Button,
    PrimaryButton
  },
  props: {
    children: {
      value: `
<Button>Button</Button>
<PrimaryButton>Button</PrimaryButton>
      `,
      type: PropTypes.ReactNode,
      description: "Buttons to wrap."
    },
    alignment: {
      value: "left",
      options: ["left", "right", "spaced"],
      type: PropTypes.Enum,
      description: "Aligns the buttons within the group."
    },
  }
}