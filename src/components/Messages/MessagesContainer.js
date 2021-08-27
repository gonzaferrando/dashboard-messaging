import React, { useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { Button } from "../Form";
import Api from "../../api";
import MessagesList from "./MessagesList";
import { messagePriority } from "../../types/common";
import { useMessageDashboardContext } from "../../context/Messages/MessagesDashboardContext";
import testingId from "../../constant/testingId";

const MessagesContainer = () => {
  const {
    apiIsStreaming,
    errorMessages,
    warningMessages,
    infoMessages,
    startStreaming,
    clearAllMessages,
    processIncomingMessage,
  } = useMessageDashboardContext();

  /**
   * useRef because I want to keep same instance object across re-rendering.
   */
  const api = useRef(
    new Api({
      messageCallback: (message) => {
        processIncomingMessage(message);
      },
    }),
    []
  );

  useEffect(() => {
    api.current.start();
    startStreaming(true);
  }, []);

  const toogleStreaming = () => {
    if (apiIsStreaming) {
      api.current.stop();
    } else {
      api.current.start();
    }
    startStreaming(!apiIsStreaming);
  };

  return (
    <Container data-testid={testingId.messagesDashboard.screen}>
      <Box display="flex" justifyContent="center">
        <Button
          text={apiIsStreaming ? "Stop" : "Start"}
          onClick={() => toogleStreaming()}
        />
        <Button
          text="Clear"
          onClick={() => {
            clearAllMessages();
          }}
        />
      </Box>
      <Box marginTop="30px">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <MessagesList
              title="Error Type 1"
              priority={messagePriority.error}
              data={errorMessages}
            />
          </Grid>
          <Grid item xs={4}>
            <MessagesList
              title="Warning Type 2"
              priority={messagePriority.warning}
              data={warningMessages}
            />
          </Grid>
          <Grid item xs={4}>
            <MessagesList
              title="Info Type 3"
              priority={messagePriority.info}
              data={infoMessages}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default React.memo(MessagesContainer);
