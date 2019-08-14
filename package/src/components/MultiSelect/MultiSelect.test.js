import React from "react";
import { render } from "../../tests";
import MultiSelect from "./MultiSelect";

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
    <MultiSelect options={options} />
  ));

  expect(asFragment()).toMatchSnapshot();
});
