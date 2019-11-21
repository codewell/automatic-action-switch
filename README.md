# @codewell/automatic-action-switch
Automatically perform reducer actions depending on the action type.
Will automatically update a state property depending on the passed action type.
Intended to work with flat states.

Lets say we have a dispatched action
`{type: 'SET_FOO', payload: 'value'}`
The result of the automatic action switch (if the initial state is `{}`) will be:
`{foo: 'value'}`. There is a bit of magic. The state property will be calculated from the actual action type. The prefix is ignored and used to select what type of state action should be performed (i.e. reducer function). `SET` overrides a state property, `UPDATE` updates the passed properties, `REMOVE` removes a state property.


```JavaScript
// Set the state property named 'stateProperty'
const SET_STATE_PROPERTY = 'SET_STATE_PROPERTY';

// Update the state property named 'stateProperty'
const UPDATE_STATE_PROPERTY = 'UPDATE_STATE_PROPERTY';

// Remove state property named 'stateProperty'
const REMOVE_STATE_PROPERTY = 'REMOVE_STATE_PROPERTY';
```

## Installation
```
npm install @codewell/automatic-action-switch
```

## Basic usage
```JavaScript
import automaticActionSwitch from '@codewell/automatic-action-switch';

const actionSwitch = automaticActionSwitch();

const state = {};
const SET_STATE_PROPERTY = 'SET_STATE_PROPERTY';
const action = {type: SET_STATE_PROPERTY, payload: 'value'}

const nextState = actionSwitch(state, action);
console.log(nextState);
// => {stateProperty: 'value'}
```

### React `useReducer`
```JavaScript
import { useReducer } from 'react';
import automaticActionSwitch from '@codewell/automatic-action-switch';

const actionSwitch = automaticActionSwitch();

const reducer = (state, action) => {
  return actionSwitch(state, action); // Automatically updates the state
};

//...
useReducer(reducer); // Use where applicable
```

