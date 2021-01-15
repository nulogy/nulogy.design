---
path: "/guides/component-practices"
title: "Component Best Practices"
intro: "This is a set of 5 guidelines and practices to follow to ensure you're building scalable user interfaces using the Nulogy Design System."
---

## 1. Always use the theme

The [theme](/theme) should include all the style values you need to build your application and implement custom components.

When using style props on an NDS component, you can use the theme keys directly:

```javascript
const FormLabel = ({children}}) => (
    <Text fontSize="small">{children}:</Text>)
```

If using styled-components, you can access the theme like so:

```javascript
const FormLabel  = styled(Text)(({theme}) => ({
        fontSize: theme.fontSizes.small,
})
```

Wrapping your application in the [NDSProvider](https://github.com/nulogy/design-system#2-wrap-your-appliction-in-our-theme-provider) component provides the theme to all NDS components inside of it. Never import the theme directly from @nulogy/components as this will disconnect your component from the Provider.

If a value that isn't included in the theme is needed, e.g a margin of `18px` instead of `16px`. consider if these are [magic numbers](https://css-tricks.com/magic-numbers-in-css/) that are trying to point you towards a rework of your layout. Feel free to reach out for a consult from Design Ops if needed.

If you're absolutely sure a custom value is needed, make sure to store it in a constant so it can be found later and the context can remain, e:g:

```javascript
const LIGHTEST_ACCESSIBLE_TEXT = "#949494";
const FormLabel = ({children}}) => (
    <Text color={LIGHTEST_ACCESSIBLE_TEXT}>{children}:</Text>)
```

## 2. Use existing components and props first

Look for props and primitive components that can be used together to implement specific behaviours in your app. Remember that you can use a number of style props to change the look of NDS components: instead of divs, ps, or other html tags, you could be using [Box](/components/box/), [Flex](/components/Flex) and [Text](/components/Text). This gives us more control and allows first-class access to the theme.

For example:

```javascript
const FormLabel = styled("p")({
  fontSize: "12px",
  textTransform: "uppercase",
  textAlign: "right"
});
```

None of this is necessary custom code as `Text` already supports changing the `fontSize`, `textTransform` and `textAlign.`

```javascript
const FormLabel = ({children}}) => (
    <Text fontSize="small" textTransform="uppercase" textAlign="right">{children}:</Text>)
```

This should be faster to write, more readable and searchable, and guarantees a connection to the theme.

## 3. Name components after what they do

Name components after what they do, not how they do it. Often we're tempted to name an internal components Styled\_\_\_\_ (e.g `StyledText`) just for the purpose of making some style changes, but this can make it tricky to understand what that component was meant to do and to make markup changes later on.

Instead of something generic like `StyledText`, try a contextual name: e.g, if the component has a specific purpose like displaying capacity values, try something like like `CapacityText`. Or if it's meant to be used as a Label for another value, try `CapacityLabel`.

## 4. Minimize component props

Too many props can make the component difficult to understand. It can be hard to see what props are needed where, making it hard to reuse in the future, accomodate changes and even to test.

Try to keep the number of your component props to a minimum. If your component has a large number of unrelated props, it can be a sign that it should be broken down into multiple meaningful components instead.

Feel free to reach out to Design Ops for a consult on component design at any time if you're unsure of how something should be getting broken down.

## 5. Favour composition

Rather than having large monolithic components with many properties, try composing multiple simple components together instead. This will make it easier to make changes later without forgetting the original context of a design. See the [React introduction](https://reactjs.org/docs/composition-vs-inheritance.html) for more information.

There are some simple ways to ensure components are being composed:

### Build small simple components first

Instead of building out a whole feature at once, start by building small components for each thing you need to do and then combine them together.

Here is an example of a component built up of multiple simple components. We want to display a comment in a Card layout, and allow the user to Edit and Remove it:

```javascript
/// Comment.jsx

const Card = ({ children }) => (
  <Box boxShadow="medium" backgroundColor="white">
    {children}
  </Box>
);
const Title = ({ children }) => (
  <Heading2 color="darkBlue">{children}</Heading2>
);
const EditButton = ({ onClick }) => (
  <Button onClick={onClick}>{t("Edit")}</Button>
);
const RemoveButton = ({ onClick }) => (
  <Button onClick={onClick}>{t("Remove")}</Button>
);

const Comment = ({ title, children, isRemoveable }) => (
  <Card>
    <Title>{title}</Title>
    <Box>{children}</Box>
    <EditButton />
    {isRemoveable && <RemoveButton />}
  </Card>
);
```

### Separate stateful and stateless components

State should come from the outermost parent component of a set of related components and the inner components can all be stateless and simply take in the state of the parent through props.

This makes it simple to seperate presentational logic (i.e. this is what the component looks like) vs application logic (how to component behaves in the app and and relates to its data).

Using the presentational comment card, we can wrap it in a stateful `UserCommentsContainer` component that deals with fetching and determining which comments to display.

```javascript
///  UserCommentsContainer .jsx

const  UserCommentsContainer = ({currentUser}) => {
  const [ comments, setComments] = useState();

  useEffect(() => {
    // fetch the comments from somewhere, and use only the current users comments.
    const usersComments = fetch(getComments).filter(({user} => user === currentUser);
    setComments(usersComments);
  })

  return <Box>
      <Heading1>{currentUser}'s Comments</Heading1>
      {comments.map(({title, body} ) => <Comment title={title}>{body}<Comment>)}
    </Box>
}
```

This way we can use the Comment component wherever we need to display a comment without being tied to specific data or page-level requirements.

_Pull requests on these guidelines are always welcome at [github.com/nulogy/nulogy.design](https://github.com/nulogy/nulogy.design)._
