import { findByText, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import userEvent from "@testing-library/user-event";
import { SignUpDocument, UserDocument } from "../types/generated-queries";
import SignUp from "../components/SignUp";
import { fakeUser } from "../lib/testUtils";

const me = fakeUser();
const mePassword = 'sarah';

const mocks = [
  {
    request: {
      query: SignUpDocument,
      variables: {
        name: me.name,
        email: me.email,
        password: mePassword,
      },
    },
    result: {
      data: {
        createUser: {
          __typename: "User",
          id: "abc123",
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  {
    request: { query: UserDocument },
    result: { data: { authenticatedItem: me } },
  },
];


describe('<SignUp/>', () => {
  it("Renders and matches snapshot", async () => {
    const { container } = render(
      <MockedProvider>
        <SignUp />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();

  });
  it("Renders and matches snapshot", async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SignUp />
      </MockedProvider>
    );

 ;
    await userEvent.type(screen.getByLabelText(/name/i), me.name);
    await userEvent.type(screen.getByLabelText(/email address/i), me.email);
    await userEvent.type(screen.getByLabelText(/password/i), mePassword);
    await userEvent.click(
      screen.getByRole("button", {
        name: /sign up/i,
      })
    );
    await screen.findByText(/Signed up with/i);
  });
})