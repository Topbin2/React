import { render, screen } from "@testing-library/react";
import React from "react";
import Navbar from "../navbar";
import renderer from "react-test-renderer";

describe("navbar", () => {
  it("snapshot test", () => {
    const component = renderer.create(<Navbar totalCount="0" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("props 에 따라 count의 숫자가 변경되어야 합니다.", () => {
    render(<Navbar totalCount="0" />);
    screen.getByText("0");
  });
});
