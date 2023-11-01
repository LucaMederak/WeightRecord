import { RenderResult } from "@testing-library/react";
import { setupProviders } from "@/utils/testSetup";
import Alert from "./Alert";

let alertComponent: RenderResult;

beforeEach(() => {
  alertComponent = setupProviders(
    <Alert type="success" title="Wysłano wiadomość" />
  );
});

describe("Alert", () => {
  it("should render the alert", () => {
    const { getByText } = alertComponent;
    const alert = getByText("Wysłano wiadomość");
    expect(alert).toBeInTheDocument();
  });
});
