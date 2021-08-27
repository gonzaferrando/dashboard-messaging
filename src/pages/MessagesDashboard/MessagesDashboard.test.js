import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MessagesDashboard from ".";
import testingId from "../../constant/testingId";

afterEach(cleanup);
describe("MessagesDashboard component", () => {
  it("renders ok", () => {
    render(<MessagesDashboard />);
    expect(screen.getByTestId(testingId.layout.header)).toBeTruthy();
    expect(screen.getByTestId(testingId.messagesDashboard.screen)).toBeTruthy();
  });
});
