# react-gulp-browserify-demo
A bare bones example of setting up React with Gulp and Browserify.

**Code credit / inspiration** taken / stolen from [Tyler McGinnis](http://twitter.com/tylermcginnis33)'s awesome, multi-part [React.JS Tutorial](http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/).

I've included the `dist/` directory (it's typically a no no to include compiled code in a repo, right?) so that you can see how the `index.html` file in `dist/` is altered to use `build.min.js` after running `gulp production`. Running plain old `gulp` will use the `index.html` file from `src/` and 

## React Notes
*These are expanded on from [React.JS Tutorial](http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/)*

### JSX Syntax
- `JSX` – Allows us to write HTML like syntax which gets transformed to lightweight JavaScript objects. Not necessary but preferred for ease of use. However this means `JSX` must be compiled to regular old `JS`.

### The "Virtual DOM"
- `Virtual DOM`  – A JavaScript representation of the actual DOM. Used by React to compare versions and determine what needs to be updated in the actual DOM.

### Components
- `React.createClass` – The way in which you create a new component, takes an object.
- `render` (method) – What we would like our HTML Template to look like. This method is required for every component.
- `ReactDOM.render` – Renders a React component to a DOM node (note: this changed from `react.render` in `v0.14`)

- `state` – The internal data store (object) of a component.
- `getInitialState` (method) – The way in which you set the initial state of a component.
- `setState` (method) – A helper method for altering the state of a component.

- `props` – The data which is passed to the child component from the parent component.
- `propTypes` – Allows you to control the presence, or types of certain props passed to the child component.
- `getDefaultProps` (method) – Allows you to set default props for your component.

### Component LifeCycle
Events that will fire at various points in time during the component's life

  - `componentWillMount` – Fired before the component will mount
  - `componentDidMount` – Fired after the component mounted
  - `componentWillReceiveProps` – Fired whenever there is a change to props
  - `componentWillUnmount` – Fired before the component will unmount

### Events
Events that React will listen for to update a component's state.
  - `onClick`
  - `onSubmit`
  - `onChange` works nicely with `<input type="text">`

## React with Gulp & Browserify
The benefit of using a build system like Gulp is that it will automatically compile your `JSX` components into JS. Browserify helps by making the components modular, eg: using the `module.exports = ComponentName;` and `require('./ComponentName');` with each component file, as you would normally do with modules in Node.JS. Using Browserify also avoids polluting the global name space, which is a good thing.

Doing `gulp` will run gulp in the default watch mode and bundle components into a single `build.js` file using browserify.

Doing `gulp production` will run gulp in the production mode, bundling, minifying, and uglifying the components into a single `bundle.min.js` file using browserify.