import React from "react";
import styled from "styled-components";
import { MessageDashboardProvider } from "../../context/Messages/MessagesDashboardContext";

import Header from "../../components/Header";
import MessagesContainer from "../../components/Messages/MessagesContainer";

const Brand = styled.span`
  font-size: 28px;
`;
const MessagesDashboard = () => {
  return (
    <MessageDashboardProvider>
      <Header>
        <Brand>nuffsaid.com Code Challenge</Brand>
      </Header>
      <MessagesContainer />
    </MessageDashboardProvider>
  );
};

export default React.memo(MessagesDashboard);
