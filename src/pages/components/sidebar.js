import React from "react";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight";
import {
  SectionTitle,
  StatusIndicator,
  Title,
  Link,
  ListItem
} from "@nulogy/components";
import {
  DocText as Text,
  Layout,
  Intro,
  DocSection,
  PropsTable,
  BetaMessage
} from "../../components";
import { STORYBOOK_COMPONENT_URL } from "../../shared/const";

const SidebarRows = [
  {
    name: "offset",
    type: "string",
    defaultValue: "0px",
    description:
      "The amount of pixels to offset the Sidebar from on the right of the screen. Mostly used for in the case of multiple Sidebars."
  },
  {
    name: "closeButtonTestId",
    type: "string",
    defaultValue: "Sidebar-close-button",
    description: "To use the close button in a test."
  },
  {
    name: "closeButtonAriaLabel",
    type: "string",
    defaultValue: "close",
    description: "Aria label for the close button."
  },
  {
    name: "duration",
    type: "number",
    defaultValue: "0.25",
    description:
      "The length of the animation for sliding in and out the Sidebar."
  },
  {
    name: "footer",
    type: "ReactNode",
    defaultValue: "",
    description: "An optional sticky footer."
  },
  {
    name: "title",
    type: "string",
    defaultValue: "",
    description: "A heading to display at the top of the Sidebar."
  },
  {
    name: "triggerRef",
    type: "RefObject",
    defaultValue: "",
    description:
      "The button that was used to open the Sidebar. Setting this can will allow focus to return to that element when the Sidebar is closed. If it's not set, the focus will be set to the first element on the page."
  },
  {
    name: "isOpen",
    type: "function",
    defaultValue: "",
    description: "An event handler for opening the Sidebar."
  },
  {
    name: "onClose",
    type: "function",
    defaultValue: "",
    description: "An event handler for closing the Sidebar."
  },
  {
    name: "closeOnOutsideClick",
    type: "boolean",
    defaultValue: "true",
    description:
      "If true, calls onClose when the user clicks anywhere but the Sidebar."
  },
  {
    name: "overlay",
    type: "boolean",
    defaultValue: "true",
    description:
      "If true, displays an overlay behind the sidebar when it is open."
  }
];

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Sidebar</title>
    </Helmet>
    <Intro>
      <Title>
        Sidebar <StatusIndicator type="informative">BETA</StatusIndicator>
      </Title>
      <BetaMessage />
    </Intro>
    <DocSection>
      <SectionTitle>Sidebar</SectionTitle>
      <Text>
        The Sidebar is designed for displaying additional information or
        editing/creating new items. The component provides animation, a close
        button, and consistent paddings and title positioining. Sidebars are
        always optional, and can be used on any Page you like.
      </Text>
      <Text>See props for accessibility features.</Text>
      <Highlight className="js">
        {`import {Sidebar, Page, Breadcrumbs} from "@nulogy/components"

const ExampleSidebar = ({ isOpen, onClose }) => (
  <Sidebar isOpen={isOpen} title="Filters" onClose={onClose}>
    <Select options={[]} labelText="Delivery:" />
  </Sidebar>
);

export const WithSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
      <Page
        breadcrumbs={
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <Link href="/">Materials</Link>
          </Breadcrumbs>
        }
        title="Materials Overview"
      >
        <>
          <Box minWidth="300px">
            <PrimaryButton onClick={toggleSidebar}>Toggle Sidebar</PrimaryButton>
          </Box>
        </>
      <ExampleSidebar isOpen={isOpen} onClose={closeSidebar} />        
      </Page>
  );
};`}
      </Highlight>
      <PropsTable propsRows={SidebarRows} />
    </DocSection>

    <DocSection>
      <SectionTitle>Resources</SectionTitle>
      <ListItem>
        <Link href={`${STORYBOOK_COMPONENT_URL}sidebar--sidebar`}>
          View in Storybook
        </Link>
      </ListItem>
    </DocSection>

    <DocSection>
      <SectionTitle>Related components</SectionTitle>
      <ListItem>
        <Link href="/components/application-frame">Application Frame</Link>
      </ListItem>
      <ListItem>
        <Link href="/components/page">Page</Link>
      </ListItem>
    </DocSection>
  </Layout>
);
