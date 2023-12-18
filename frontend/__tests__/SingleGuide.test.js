import { MockedProvider } from "@apollo/react-testing";
import { fakeGuide } from "../lib/testUtils";
import { useGetGuideQuery } from "../types/generated-queries";
import { render, screen } from "@testing-library/react";
import SingleGuide, { GET_GUIDE_QUERY } from "../components/SingleGuide";
import gql from "graphql-tag";

const guide = fakeGuide();



const mocks = [
  {
    // When someone requests this query and variable combo
    request: {
      query: GET_GUIDE_QUERY,
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
    await screen.getByTestId("singleGuide");
    debug();
    // expect(container).toMatchSnapshot();
  });


});
