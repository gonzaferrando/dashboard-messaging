import * as actions from "./MessagesDashboardActions";

const clearMessage = (messages, id) => {
  let currentMessages = [...messages];
  currentMessages.splice(
    currentMessages.findIndex((m) => m.id === id),
    1
  );
  return currentMessages;
};

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.SET_IS_API_STREAMING:
      return {
        ...state,
        apiIsStreaming: payload,
      };

    case actions.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: [...state.errorMessages, payload],
      };

    case actions.SET_WARNING_MESSAGE:
      return {
        ...state,
        warningMessages: [...state.warningMessages, payload],
      };

    case actions.SET_INFO_MESSAGE:
      return {
        ...state,
        infoMessages: [...state.infoMessages, payload],
      };

    case actions.CLEAR_ALL_MESSAGES:
      return {
        ...state,
        infoMessages: [],
        warningMessages: [],
        errorMessages: [],
      };

    case actions.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: clearMessage(state.errorMessages, payload),
      };

    case actions.CLEAR_WARNING_MESSAGE:
      return {
        ...state,
        warningMessages: clearMessage(state.warningMessages, payload),
      };

    case actions.CLEAR_INFO_MESSAGE:
      return {
        ...state,
        infoMessages: clearMessage(state.infoMessages, payload),
      };

    default:
      return state;
  }
};
