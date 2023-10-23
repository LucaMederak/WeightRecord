import { RenderResult, fireEvent, renderHook } from "@testing-library/react";
import { setupProviders } from "@/utils/testSetup";
import Button from "./Button";

let buttonComponent: RenderResult;

const handleClickMock = jest.fn();

beforeEach(() => {
  buttonComponent = setupProviders(
    <Button onClick={handleClickMock}>Wyślij</Button>
  );
});

describe("Button", () => {
  it("should render the button", () => {
    const { getByText } = buttonComponent;
    const button = getByText("Wyślij");
    expect(button).toBeInTheDocument();
  });
  it("should call a function on button click", () => {
    const { getByText } = buttonComponent;
    const button = getByText("Wyślij");
    fireEvent.click(button);
    expect(handleClickMock).toHaveBeenCalled();
  });
});
