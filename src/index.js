const getActionPrefix = require('@codewell/get-action-prefix');
const {
  setStateProperty, updateStateProperty, removeStateProperty,
} = require('@codewell/state-actions');
const defaultCustomSwitch = require('./defaultCustomSwitch');
const defaultConfig = require('./defaultConfig');

const automaticActionSwitch = (customSwitch = defaultCustomSwitch, config = defaultConfig) => (state, action) => {
  const actionPrefix = getActionPrefix(action.type);
  const { set, update, remove } = config.prefix;
  const property = '' // use some fancy function here

  switch (actionPrefix) {
    case set: {
      return setStateProperty(state, action, property);
    }

    case update: {
      return updateStateProperty(state, action, property);
    }

    case remove: {
      return removeStateProperty(state, property);
    }

    default: {
      return customSwitch(state, action);
    }
  };

};

module.exports = automaticActionSwitch;
