const getActionPrefix = require('@codewell/get-action-prefix');

const defaultCustomSwitch = require('./defaultCustomSwitch');
const defaultConfig = require('./defaultConfig');

const automaticActionSwitch = (customSwitch = defaultCustomSwitch, config = defaultConfig) => (state, action) => {
  const actionPrefix = getActionPrefix(action.type);
  const { set, update, remove } = config.prefix;

  switch (actionPrefix) {
    case set: {
      // return
    }

    case update: {
      // return
    }

    case remove: {
      // return
    }

    default: {
      return customSwitch(state, action);
    }
  };

};

module.exports = automaticActionSwitch;
