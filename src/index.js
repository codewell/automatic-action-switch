const {
  getActionTypePrefix,
  getStatePropertyFromActionType,
} = require("@codewell/action-type-utils");
const {
  setStateProperty,
  updateStateProperty,
  removeStateProperty,
} = require("@codewell/state-actions");
const defaultCustomSwitch = require("./defaultCustomSwitch");
const defaultConfig = require("./defaultConfig");
const { default: combineActions } = require("./combineActions");

const automaticActionSwitch = (
  customSwitch = defaultCustomSwitch,
  config = defaultConfig,
) => (state, action) => {
  const { set, update, remove, combine } = config.prefix;
  const actionPrefix = getActionTypePrefix(action.type);
  const property = getStatePropertyFromActionType(action.type);

  switch (actionPrefix) {
    case combine: {
      return combineActions(state, action);
    }
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
  }
};

module.exports = automaticActionSwitch;
