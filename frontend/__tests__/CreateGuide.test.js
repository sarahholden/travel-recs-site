import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import userEvent from "@testing-library/user-event";
import Router from 'next/router'; 
import CreateGuide from '../components/CreateGuide'
import {
  CreateGuideDocument,
  AllGuidesQueryDocument,
} from "../types/generated-queries";
import { fakeGuide } from "../lib/testUtils";

const item = fakeGuide();


describe('<CreateGuide/>', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <CreateGuide />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('handles the updating', async () => {
    // 1. Render the form out
    const { container, debug } = render(
      <MockedProvider>
        <CreateGuide />
      </MockedProvider>
    );
    // 2. Type into the boxes
    debug()
    await userEvent.type(
      screen.getByRole("textbox", {
        name: /name/i,
      }),
      item.name
    );
    // 3. Check that those boxes are populated!
  })
})