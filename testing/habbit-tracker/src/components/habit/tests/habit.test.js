import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Habit from "../habit";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("Habit", () => {
  const habit = { id: 1, name: "Habit", count: 4 };
  let HabitComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    HabitComponent = (
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(HabitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Button Click", () => {
    beforeEach(() => {
      render(HabitComponent);
    });

    it("PLUS 버튼을 클릭하면 onIncrement(habit) 함수가 실행되어야 합니다.", () => {
      const button = screen.getByTitle("increase");
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledTimes(1);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });

    it("MINUS 버튼을 클릭하면 onDecrement(habit) 함수가 실행되어야 합니다.", () => {
      fireEvent.click(screen.getByTitle("decrease"));
      expect(onDecrement).toHaveBeenCalledTimes(1);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });

    it("DELETE 버튼을 클릭하면 onDelete(habit) 함수가 실행되어야 합니다.", () => {
      fireEvent.click(screen.getByTitle("delete"));
      expect(onDelete).toHaveBeenCalledTimes(1);
      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
