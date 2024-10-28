 
import { fn, userEvent, within, expect } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Primary button',
    data: 'primary',
    'data-testid': 'primary-button'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('primary-button'));
 
   
    await expect(
      canvas.getByText(
        'Primary button',
      ),
    ).toBeInTheDocument();
  },

};

export const Secondary = {
  args: {
    label: 'Secondary button',
  },
};

export const Large = {
  args: {
    size: 'Large button',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'Small button',
    label: 'Button',
  },
};
