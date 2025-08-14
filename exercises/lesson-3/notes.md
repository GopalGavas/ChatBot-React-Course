## key

- if we insert an array of components in react we need to give each component a prop called key
- key helps react to track changes in the array
- the key has to be unique

## EventHandlers

- Event handlers let us run a function when we interact with the website
- onClick={egFunction} -> here onClick is event, egFunction is eventhandler
- events will always be in camelCase i.e onClick, onHover etc
- IMP: we don't call the function in the eventHandler i.e egFunction() this is wrong, just egFunction pass the name

## State

- Data that is connected to the html.
- When we update this data it will update the html.
- _Note_: In react we should not update the data directly, we should always create a copy and then modify the copy

## Lifting the State Up

- Moving the state up to the outer component, which allows us to share state between multiple components

## Hooks

- Hooks let us insert React features into our component
