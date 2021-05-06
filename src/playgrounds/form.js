import {
  Form,
  Input,
  Select,
  Textarea,
  Box,
  PrimaryButton,
  QuietButton
} from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Form",
  scope: {
    Form,
    Input,
    Select,
    Textarea,
    Box,
    PrimaryButton,
    QuietButton
  },
  props: {
    children: {
      value: `
<Input id="project" labelText="Project code" />
<Input id="customer" labelText="Customer's name" />
<Textarea rows={4} mb="x6" labelText="Project description" />
<Box mb="x6">
  <PrimaryButton mr="x1">Create project</PrimaryButton>
  <QuietButton>Cancel</QuietButton>
</Box>`,
      type: PropTypes.ReactNode,
      description: "Inner content."
    },
    title: {
      value: "Form Title",
      type: PropTypes.String,
      description: "Title of the form."
    },
  }
}