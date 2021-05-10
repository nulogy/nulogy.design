import { Pagination } from "@nulogy/components";
import {PropTypes} from 'react-view';

export const config = {
  componentName: "Pagination",
  scope: {
    Pagination
  },
  props: {
    currentPage: {
        value: 7,
        type: PropTypes.Number, 
        description: "The currently active page"
    },
    totalPages: {
        value: 12,
        type: PropTypes.Number, 
        description: "The total number of pages to show pagination for"
    },
    onNext: {
      value: '() => console.log("next")',
      type: PropTypes.Function,
      description: "Invoked when the next button is clicked."
    },
    onPrevious: {
      value: '() => console.log("previous")',
      type: PropTypes.Function,
      description: "Invoked when the next button is clicked."
    }, 
    onSelectPage: {
      value: '() => console.log("page selected")',
      type: PropTypes.Function,
      description: "Invoked when a page number is selected."
    },
    nextLabel: {
      value: 'Next',
      defaultValue: 'Next',
      type: PropTypes.String,
      description: "The next button label."
    },
    previousLabel: {
      value: 'Previous',
      defaultValue: 'Previous',
      type: PropTypes.String,
      description: "The previous button label."
    },                                                           
  }
}