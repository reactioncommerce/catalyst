import React from "react";
import { render } from "../../tests";
import Select from "./Select";

const options = [
  "Mens",
  "Womens",
  "Kids"
].map((option) => ({
  label: option.toLowerCase(),
  value: option
}));

test("basic snapshot test", () => {
  const { asFragment } = render((
    <Select options={options} />
  ));

  expect(asFragment()).toMatchSnapshot();
});
