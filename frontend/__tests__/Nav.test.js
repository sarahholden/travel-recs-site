import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import Nav from '../components/Nav';
import { UserDocument } from "../types/generated-queries"
import { fakeUser } from "../lib/testUtils";

const notSignedInMocks = [
  {
    request: { query: UserDocument },
    result: { data: { authenticatedItem: null }}
  },
];

const signedInMocks = [
  {
    request: { query: UserDocument },
    result: { data: { authenticatedItem: fakeUser() }}
  },
];

describe('<Nav/>', () => {
  it('Renders a minimal nav when signed out', () => {
    const { container, debug } = render(
        <MockedProvider mocks={notSignedInMocks}>
          <Nav/>
        </MockedProvider>
    )
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/guide/i)).toBeInTheDocument();
    debug()
  })
})