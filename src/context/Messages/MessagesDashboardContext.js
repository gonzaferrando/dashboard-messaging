import { createContext, useContext, useReducer } from "react";
import MessagesDashboardReducer from "./MessagesDashboardReducer";

import * as actions from "./MessagesDashboardActions";
import { messagePriority } from "../../types/common";

const MessageDashboardContext = createContext();

const MessageDashboardProvider = (props) => {
  const initialState = {
    apiIsStreaming: false,
    infoMessages: [],
    errorMessages: [],
    warningMessages: [],
  };

  const [state, dispatch] = useReducer(MessagesDashboardReducer, initialState);

  const processIncomingMessage = (message) => {
    let dispatchType;
    switch (message.priority) {
      case messagePriority.error:
        dispatchType = actions.SET_ERROR_MESSAGE;
        break;
      case messagePriority.warning:
        dispatchType = actions.SET_WARNING_MESSAGE;
        break;
      case messagePriority.info:
        dispatchType = actions.SET_INFO_MESSAGE;
        break;
      default:
        console.error(
          "processIncomingMessage function - Cannot evaluate message priority."
        );
    }

    dispatch({ type: dispatchType, payload: message });
  };

  const clearMessage = (priority, messageId) => {
    let dispatchType;
    switch (priority) {
      case messagePriority.error:
        dispatchType = actions.CLEAR_ERROR_MESSAGE;
        break;
      case messagePriority.warning:
        dispatchType = actions.CLEAR_WARNING_MESSAGE;
        break;
      case messagePriority.info:
        dispatchType = actions.CLEAR_INFO_MESSAGE;
        break;
      default:
        console.error(
          "clearMessage function - Cannot evaluate message priority."
        );
    }

    dispatch({ type: dispatchType, payload: messageId });
  };

  const startStreaming = (active) => {
    dispatch({ type: actions.SET_IS_API_STREAMING, payload: active });
  };

  const clearAllMessages = () => {
    dispatch({ type: actions.CLEAR_ALL_MESSAGES });
  };

  return (
    <MessageDashboardContext.Provider
      value={{
        infoMessages: state.infoMessages,
        errorMessages: state.errorMessages,
        warningMessages: state.warningMessages,
        apiIsStreaming: state.apiIsStreaming,
        startStreaming,
        clearAllMessages,
        clearMessage,
        processIncomingMessage,
      }}
    >
      {props.children}
    </MessageDashboardContext.Provider>
  );
};

const useMessageDashboardContext = () => useContext(MessageDashboardContext);

export { MessageDashboardProvider, useMessageDashboardContext };
