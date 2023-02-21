import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../utils/utils-for-tests";

test("renders learn react link", () => {
  renderWithProviders(<App />);
  // const linkElement = screen.getByText(/Welcome to the Home Page/i);
  // expect(linkElement).toBeInTheDocument();
});