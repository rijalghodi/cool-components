import type { Meta, StoryObj } from '@storybook/react';

import { PlusButton } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Buttons/PlusButton',
  component: PlusButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'subtle'],
      description: 'Variant of the button',
      defaultValue: 'filled',
    },
    children: {
      control: 'text',
      description: 'Label of the button',
      defaultValue: 'Click Me',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Radius of the button',
      defaultValue: 'md',
    },
  },
} satisfies Meta<typeof PlusButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: 'md',
    variant: 'filled',
    children: 'Click Me',
    radius: 'md',
  },
};

export const Secondary: Story = {
  args: {
    size: 'md',
    variant: 'light',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'filled',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'filled',
    children: 'Button',
  },
};
