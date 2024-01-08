import { MockedProvider } from "@apollo/react-testing";
import { fakeGuide } from "../lib/testUtils";
import { render, screen } from "@testing-library/react";
import SingleGuide from "../components/SingleGuide";
import { GetGuideDocument } from "../types/generated-queries";

const guide = fakeGuide();


const mocks = [
  {
    // When someone requests this query and variable combo
    request: {
      query: GetGuideDocument,
      variables: {
        id: "123",
      },
    },
    // Return this data
    result: {
      data: {
        Guide: guide,
      },
    },
  },
];


describe("<SingleGuide/>", () => {
  it("renders with proper data", async () => {
    // We need to make some fake data
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleGuide id="123" />
      </MockedProvider>
    );
    // Wait for the test ID to show up
    await screen.findByTestId("singleGuide");
    expect(container).toMatchSnapshot();
  });

  it("Errors out when an item is not found", async () => {
    const errorMock = [
      {
        request: {
          query: GetGuideDocument,
          variables: {
            id: "123",
          },
        },
        result: {
          errors: [{ message: "Item not found" }],
        },
      },
    ];
    // We need to make some fake data
    const { container, debug } = render(
      <MockedProvider mocks={errorMock}>
        <SingleGuide id="123" />
      </MockedProvider>
    );

    await screen.findByTestId("graphql-error");
    expect(container).toHaveTextContent(/shoot/i)
  })
  


});
