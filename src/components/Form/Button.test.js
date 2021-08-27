import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

describe("Button", () => {
  it("onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} text="test" />);
    fireEvent.click(screen.getByText("test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
