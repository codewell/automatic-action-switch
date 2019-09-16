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
  expect(defaultActionSwitch()(
    state,
    { type: SET_FOO, payload: 1 }
  )).toEqual({ foo: 1 })
})

/**
 * UPDATE
 */
const UPDATE_FOO = 'UPDATE_FOO';
test('Update foo', () => {
  expect(defaultActionSwitch(
    state,
    { type: UPDATE_FOO, payload: { two: 2, three: 3 } }
  )).toEqual({ foo: { one: 0, two: 2, three: 3 } })
})

/**
 * REMOVE
 */
const REMOVE_FOO = 'REMOVE_FOO';
test('Remove foo', () => {
  expect(defaultActionSwitch(
    state,
    { type: REMOVE_FOO }
  )).toEqual({})
})

/**
 * Custom switch
 */
const customActionSwitch = automaticActionSwitch(/* Options */);

/**
 * Custom prefix
 */