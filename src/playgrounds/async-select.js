import { AsyncSelect } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "AsyncSelect",
  scope: {
    AsyncSelect,
  },
  props: {
    loadOptions: {
      value: `
(inputValue) => fetch("https://restcountries.eu/rest/v2/name/" + inputValue)
    .then(data => data.json())
    .then(results => results.map(({ name }) => {
      return ({
        label: name,
        value: name
      })
    }));`,
      type: PropTypes.Function,
      description: "Visible message.",
    },
    labelText: {
      value: "Country",
      type: PropTypes.ReactNode,
      description: "Visible message.",
    },
    defaultOptions: {
      value: false,
      type: PropTypes.Boolean,
      description:
        "if true will fetch results when the input is focussed and display them, otherwise you can pass in a list of label and value objects to display until the user types",
    },
    cacheOptions: {
      value: false,
      type: PropTypes.Boolean,
      description:
        "If cacheOptions is truthy, then the loaded data will be cached. The cache will remain until cacheOptions changes value.",
    },
  },
};
