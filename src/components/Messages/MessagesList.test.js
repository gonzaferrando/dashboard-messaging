import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import testingId from "../../constant/testingId";
import MessagesList from "./MessagesList";
import { MessageDashboardProvider } from "../../context/Messages/MessagesDashboardContext";

afterEach(cleanup);

describe("MessagesList component", () => {
  it("renders element correctly", () => {
    const state = {
      errorMessages: [
        {
          id: "d0f1b974-6514-4a7e-ba37-ead4b507302a",
          message: "Message test 1",
          priority: 1,
        },
      ],
    };

    const { getByText } = render(
      <MessageDashboardProvider value={state}>
        <MessagesList
          title="My title"
          priority={1}
          data={state.errorMessages}
        />
      </MessageDashboardProvider>
    );

    const messageList = screen.queryByTestId(testingId.messagesDashboard.list);
    expect(messageList).toBeTruthy();
    expect(getByText("My title")).toBeTruthy();
    expect(getByText(/Count/i)).toBeTruthy();

    const messageListItems = screen.queryAllByTestId(
      testingId.messagesDashboard.listItem
    );
    expect(messageListItems).toHaveLength(1);

    expect(
      screen.queryByTestId(testingId.messagesDashboard.listItemMessage)
    ).toBeTruthy();
    expect(
      screen.queryByTestId(testingId.messagesDashboard.listItemClearButton)
    ).toBeTruthy();
  });
});
