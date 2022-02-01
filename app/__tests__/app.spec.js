import React from "react";
import CheckBox from "../CheckBox";

import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("first - render page and modify name", async () => {
  jest.setTimeout(1000);
  render(<CheckBox />);

  
  await screen.findByLabelText("john");

  // screen.debug();

  const nameInput = await screen.findByLabelText("john");
  act(() => {
    fireEvent.change(nameInput, { target: { value: "grisham" } });
  });

  
  await screen.findByLabelText("grisham");
  // expect(await screen.findByLabelText("true");

  let label = await screen.findByLabelText("false");

  // screen.debug();
  act(() => {
    fireEvent.click(label);
  });

  // expect(await screen.findByLabelText("true");
  
  await screen.findByLabelText("true");
});

test("second - renders page and modify check box", async () => {
  jest.setTimeout(5000);
  render(<CheckBox />);
  let nameInput = await screen.findByLabelText("john");
  act(() => {
    fireEvent.change(nameInput, { target: { value: "second test" } });
  });

  
  await screen.findByLabelText("second test");

  
  await screen.findByLabelText("false");

  let label = await screen.findByLabelText("false");

  // screen.debug();
  act(() => {
    fireEvent.click(label);
  });

  // expect(await screen.findByLabelText("true");
  
  await screen.findByLabelText("true");

  act(() => {
    fireEvent.click(label);
  });

  // expect(await screen.findByLabelText("true");
  
  await screen.findByLabelText("true");
  act(() => {
    fireEvent.click(label);
  });

  // expect(await screen.findByLabelText("true");
  
  await screen.findByLabelText("true");

  act(() => {
    fireEvent.click(label);
  });

  // expect(await screen.findByLabelText("true");
  
  await screen.findByLabelText("true");

  // act(() => {
  //   fireEvent.click(label);
  // });

  // // expect(await screen.findByLabelText("true");
  // 
  //   expect(screen.findByLabelText("true");
  // });

  // nameInput = screen.findByLabelText("john");
  // act(() => {
  //   fireEvent.change(nameInput, { target: { value: "grisham" } });
  // });

  // 
  //   expect(screen.findByLabelText("grisham");
  // });
});
