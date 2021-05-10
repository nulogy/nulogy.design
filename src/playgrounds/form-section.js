import { FormSection, Input } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "FormSection",
  scope: {
    FormSection,
    Input,
  },
  props: {
    children: {
      value: `
<Input id="name" labelText="Name" />
<Input id="birthdate" labelText="Date of birth"/>
<Input id="birthplace" labelText="Place of birth" />`,
      type: PropTypes.ReactNode,
      description: "Visible message."
    },
    title: {
      value: "Section Title",
      type: PropTypes.String,
      description: "Title"
    },
  }
}