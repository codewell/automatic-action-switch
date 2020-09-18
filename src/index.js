import {
  getActionTypePrefix,
  getStatePropertyFromActionType,
} from "@codewell/action-type-utils";
import {
  setStateProperty,
  updateStateProperty,
  removeStateProperty,
} from "@codewell/state-actions";
import defaultCustomSwitch from "./defaultCustomSwitch";
import defaultConfig from "./defaultConfig";

const automaticActionSwitch = (
  customSwitch = defaultCustomSwitch,
  config = defaultConfig,
) => (state, action) => {
  const { set, update, remove } = config.prefix;
  const actionPrefix = getActionTypePrefix(action.type);
  const property = getStatePropertyFromActionType(action.type);

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
  }
};

export default automaticActionSwitch;
