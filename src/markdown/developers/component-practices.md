---
path: "/guides/component-practices"
title: "Component Practices"
intro: "A guide to writing components."
---

## Component Development Practices

This is a summary of practices to follow when writing components. We explain them in the context of using design-system components, but they can be applied wherever you use React.

### 1. Always use Theme from ThemeProvider

Use values from the theme as much as possible. 
When using styled props, you can use the theme values directly (where small will be 12px in our theme):
```javascript
const FormLabel = ({children}}) => (
    <Text fontSize="small">{children}:</Text>)
```
If using styled components, you can access the theme like so:
```javascript
const FormLabel  = styled(Text)(({theme}) => ({
        fontSize: theme.fontSizes.small,
})
```

The above examples use the the theme values from the NDSProvider, NEVER import the theme directly from the @nulogy/components packages.


### 2. Use Existing Components and Props First

Look for props that can be used to implement specific behaviour. Remember that you can use a number of styled props to change the look of NDS components, so you can use Box, Flex, Text components rather than divs, p, or other html tags.
For example, to update the styles of a Text instead of overriding with styled components:
```javascript
const FormLabel  = styled(Text)({
        fontSize: "12px",
        textTransform: "uppercase",
        textAlign: "right"
})
```
You can use the existing props to make the changes:

```javascript
const FormLabel = ({children}}) => (
    <Text fontSize="small" textTransform="uppercase" textAlign="right">{children}:</Text>)
```

### 3. Name components after what they do

Name components after what they do, not how they do it. Often we're tempted to name an internal components Styled____ just for the purposed of making some style changes, but this makes it tricky to understand what that component was meant to do and tp madd other text components later on.

Instead of StyledText, if the component has a specific purpose like displaying capacity values try a contextual name like CapacityText, or if its meant to be used as a Label for another value try CapacityLabel.


### 4. Minimize Component Props

Too many props can make the component difficult to understand. It can be hard to see what props are needed where, making  it hard to reuse in the future, accomodate changes and even to test. 

Try to keep the number of your component props to a minimum. If your component has a large number of unrelated props, it can be a sign that it should be broken down into multiple meaningful components instead. 


### 5. Favour Composition

Compose multiple simple components together to build up more complex components.

#### a. Build small simple components first

It's generally easier to build small, seperate components from the beginning than to separate them out from a very large and complex component.

Here is an example of a comment component built up of multiple simple components.

```javascript
/// Comment.jsx

const Card  = ({children}) => <Box boxShadow="medium" backgroundColor="white">{children}</Box>

const Title = ({children}) => <Heading2 color="darkBlue">{children}</Heading2>

const Body = ({label, children}) => (<>
    <Heading4 color="darkBlue">{label}</Heading4>
    <Text>{children}</Text>
  </>);

const EditButton = ({onClick}) => <Button onClick={onClick}>{t("Edit")}</Button>

const RemoveButton = ({onClick}) => <Button onClick={onClick}>{t("Remove")}</Button>

const Comment = ({title, children ,isRemoveable}) => 
<Card>
  <Title>{title}</Title>
  <Body> {children}</Body>
  <EditButton />
  {isRemoveable && <RemoveButton />}
</Card>
```

#### b. Separate Stateful and Stateless components

State should come from the outermost parent component of a set of related components and the inner components can all be stateless and simply take in the state of the parent through props.

This makes it simple to seperate presentational logic (i.e. this is what the component looks like) vs app logic (how to component behaves in the app, and it's data).

Using the presentational comment card, we can wrap it in a stateful UserCommentsContainer component that deals with fetching and determining which comments to display.

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