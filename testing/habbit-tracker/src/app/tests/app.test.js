import React from "react";
import HabitPresenter from "../habit_presenter";
import renderer from "react-test-renderer";
import App from "../app";
import { fireEvent, render, screen } from "@testing-library/react";

describe("app", () => {
  let presenter;
  beforeEach(() => {
    presenter = new HabitPresenter([
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Listening", count: 0 },
      { id: 3, name: "Coding", count: 1 },
    ]);
  });

  it("renders", () => {
    const component = renderer.create(<App presenter={presenter} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  beforeEach(() => {
    render(<App presenter={presenter} />);
  });

  it("count가 1이상인 habit의 갯수 만큼만 navbar의 count가 증가합니다.", () => {
    expect(screen.getByTestId("total-count").innerHTML).toBe("1");
    fireEvent.click(screen.getAllByTitle("increase")[0]);
    expect(screen.getByTestId("total-count").innerHTML).toBe("2");
  });

  it("Add 버튼을 누르면 habit이 추가됩니다.", () => {
    const button = screen.getByText("Add");
    const input = screen.getByPlaceholderText("Habit");
    fireEvent.change(input, { target: { value: "hi" } });
    fireEvent.click(button);
    const addedName = screen.getAllByTestId("habit-name")[3];
    expect(addedName.innerHTML).toBe("hi");
    const addedCount = screen.getAllByTestId("habit-count")[3];
    expect(addedCount.innerHTML).toBe("0");
  });
});
