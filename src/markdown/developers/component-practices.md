---
path: "/guides/component-practices"
title: "Component Practices"
intro: "A guide to writing components."
---

## Component Development Practices

This is a summary of practices to follow when writing components. We explain them in the context of using design-system components, but they can be applied wherever you use React.

### Use Existing Properties first

Look for props that can be used to implement specific behaviour. Remember that you can use a number of styled props to change the look of NDS components.
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


### Name components after what they do

Name components after what they do, not how they do it. Often we're tempted to name an internal components Styled____ just for the purposed of making some style changes, but this makes it tricky to understand what that component was meant to do and tp madd other text components later on.

Instead of StyledText, if the component has a specific purpose like displaying capacity values try a contextual name like CapacityText, or if its meant to be used as a Label for another value try CapacityLabel.

### Always use Theme from ThemeProvider

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

Do NOT import the theme directly from the package because it won't work with any updates you make to it in NDSProvider.


### Minimize Component Props

Too many props make the component hard to tell what props are needed where, harder to test, and too specialized to reuse in the future, or accomodate changes. 

Try to keep the number of your component props to a minimum. If your component has a large number of unrelated props, it can likely be broken down into multiple meaningful components instead. It's generally easier to build small seperate components from the beginning than to separate them out from a very large and complex component. 


### Separate Stateful and Stateless compoents

State should come from the outermost parent component of a set of related components and the inner components can all be stateless and simply take in the state of the parent through props.

### Favour Composition

Compose multiple simple components together to build up more complex components

Here is an example of a comment component built up  of multiple simple components.

```javascript
/// Comment.jsx

const Card  = ({children}) => <Box boxShadow="medium" backgroundColor="white">{children}</Box>

const Title = ({children}) => <Heading2 color="darkBlue">{children}</Heading2>

const EditButton = ({onClick}) => <Button onClick={onClick}>{t("Edit")}</Button>

const RemoveButton = ({onClick}) => <Button onClick={onClick}>{t("Remove")}</Button>

const Comment = ({title, body ,isRemoveable}) => 
<Card>
  <Title>{title}</Title>
  <Body> {body}</Body>
  <EditButton />
  {isRemoveable && <RemoveButton />}
</Card>
```
