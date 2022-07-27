import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import renderer from "react-test-renderer";
import Habits from "../habits";

describe("habits", () => {
  const habits = [
    { name: "Reading", count: "4", id: 1 },
    { name: "Eating", count: "0", id: 2 },
  ];
  let HabitsComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    HabitsComponent = (
      <Habits
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });

  it("snapshot test", () => {
    const component = renderer.create(HabitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Button Click", () => {
    beforeEach(() => {
      render(HabitsComponent);
    });

    it("reset 버튼을 클릭하면 onReset() 함수가 실행됩니다.", () => {
      fireEvent.click(screen.getAllByTitle("reset")[0]);
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });
});
