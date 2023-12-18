import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Guide from '../components/Guide';
import { fakeGuide } from '../lib/testUtils';

const guide = fakeGuide();

describe('<Guide/>', () => {
  it('renders out the guide image', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Guide guide={guide} />
      </MockedProvider>
    );
    expect(screen.getByText("New York City")).toBeInTheDocument();
    debug();
  })
})