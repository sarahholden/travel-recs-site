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
    expect(container).toMatchSnapshot()
    expect(screen.getByText(/sign in/i)).toHaveAttribute('href', '/signin')
    expect(container).toHaveTextContent(/sign in/i)
    expect(container).toHaveTextContent(/guides/i)
    expect(screen.getByText(/guides/i)).toHaveAttribute("href", "/guides");
  })
});

describe('<Nav/>', () => {
  it('Renders a minimal nav when signed out', async () => {
    const { container, debug } = render(
        <MockedProvider mocks={signedInMocks}>
          <Nav/>
        </MockedProvider>
    )
    expect(container).toMatchSnapshot()
    expect(container).toHaveTextContent(/guides/i);
    expect(screen.getByText(/guides/i)).toHaveAttribute("href", "/guides");
    await screen.findAllByText('Account')
    expect(screen.getByText(/account/i)).toHaveAttribute("href", "/account");
  })
})