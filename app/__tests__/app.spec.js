import React from "react";
import App from "../App";

import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

/**
 * When name (or) checkbox are toggled, the component has sleep functions to delay the state changes and hence I'm trying to simulate the delay
 * while running the test cases
 */
test("first test case - render page and modify name and checkbox", async () => {
  // setting timeout to 10sec to make sure that the test case will time out before completing
  jest.setTimeout(1000);
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByLabelText("john")).toBeInTheDocument();
  });

  const nameInput = await screen.findByLabelText("john");

  //firing event to change the input name
  fireEvent.change(nameInput, { target: { value: "grisham" } });

  await waitFor(() => {
    expect(screen.getByLabelText("grisham")).toBeInTheDocument();
  });

  let label = screen.getByLabelText("false");

  //firing event to change the App
  fireEvent.click(label);

  await waitFor(() => {
    expect(screen.getByLabelText("true")).toBeInTheDocument();
  });
});

test("second test case - render page and modify name and checkbox", async () => {
  // setting timeout to default to make sure that the test case will pass
  jest.setTimeout(5000);
  
  render(<App />);
  
  let nameInput = await screen.findByLabelText("john");

  fireEvent.change(nameInput, { target: { value: "grisham2, the second" } });

  await waitFor(() => {
    expect(screen.getByLabelText("grisham2, the second")).toBeInTheDocument();
  });

  let label = screen.getByLabelText("false");

  fireEvent.click(label);

  await waitFor(() => {
    expect(screen.getByLabelText("true")).toBeInTheDocument();
  });
});
