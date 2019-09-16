const automaticActionSwitch = require('../src');

/**
 * Default config
 */
const defaultActionSwitch = automaticActionSwitch();

const state = {
  foo: { one: 0, two: 0 },
};

/**
 * SET
 */
const SET_FOO = 'SET_FOO';
test('Set foo', () => {
  expect(defaultActionSwitch(
    state,
    { type: SET_FOO, payload: 1 }
  )).toEqual({ foo: 1 })
});

/**
 * UPDATE
 */
const UPDATE_FOO = 'UPDATE_FOO';
test('Update foo', () => {
  expect(defaultActionSwitch(
    state,
    { type: UPDATE_FOO, payload: { two: 2, three: 3 } }
  )).toEqual({ foo: { one: 0, two: 2, three: 3 } })
});

/**
 * REMOVE
 */
const REMOVE_FOO = 'REMOVE_FOO';
test('Remove foo', () => {
  expect(defaultActionSwitch(
    state,
    { type: REMOVE_FOO }
  )).toEqual({})
});

/**
 * Custom switch and prefix
 */
const CUSTOM_FOO = 'CUSTOM_FOO';
const customSwitch = (state, action) => {
  switch (action.type) {
    case CUSTOM_FOO: {
      return 'customFoo'
    }
    default: {
      return state;
    }
  }
}

const config = {
  prefix: {
    set: 'AUTOSET',
    update: 'AUTOUPDATE',
    remove: 'AUTOREMOVE',
  },
};

const customActionSwitch = automaticActionSwitch(customSwitch, config);

/**
 * SET
 */
const AUTOSET_FOO = 'AUTOSET_FOO';
test('Custom prefix set, wrong type', () => {
  expect(customActionSwitch(
    state,
    { type: SET_FOO, payload: 1 }
  )).toEqual(state)
});

test('Custom prefix set', () => {
  expect(customActionSwitch(
    state,
    { type: AUTOSET_FOO, payload: 1 }
  )).toEqual({ foo: 1 })
});

/**
 * UPDATE
 */
const AUTOUPDATE_FOO = 'AUTOUPDATE_FOO';
test('Custom prefix update, wrong type', () => {
  expect(customActionSwitch(
    state,
    { type: UPDATE_FOO, payload: { two: 2, three: 3 } }
  )).toEqual(state)
});

test('Custom prefix update', () => {
  expect(customActionSwitch(
    state,
    { type: AUTOUPDATE_FOO, payload: { two: 2, three: 3 } }
  )).toEqual({ foo: { one: 0, two: 2, three: 3 } })
});

/**
 * REMOVE
 */
const AUTOREMOVE_FOO = 'AUTOREMOVE_FOO';
test('Custom prefix remove, wrong type', () => {
  expect(customActionSwitch(
    state,
    { type: REMOVE_FOO }
  )).toEqual(state)
});

test('Custom prefix remove', () => {
  expect(customActionSwitch(
    state,
    { type: AUTOREMOVE_FOO }
  )).toEqual({})
});

/**
 * Custom action
 */
test('Custom action', () => {
  expect(customActionSwitch(
    state,
    { type: CUSTOM_FOO }
  )).toEqual('customFoo')
});