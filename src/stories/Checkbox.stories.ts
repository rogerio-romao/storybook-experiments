import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

// This default export determines where your story goes in the story list
const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: 'Label',
        labelPosition: 'left',
        defaultChecked: true,
    },
};

export const LabelOnRight: Story = {
    args: {
        label: 'Label',
        labelPosition: 'right',
        defaultChecked: true,
    },
};

export default meta;
