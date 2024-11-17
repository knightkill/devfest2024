import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DemoBadge } from './DemoBadge';

const meta: Meta<typeof DemoBadge> = {
  title: 'Components/DemoBadge',
  component: DemoBadge,
  parameters: {
    // Add any global parameters here
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DemoBadge>;

export const Default: Story = {};

export const Customized: Story = {
  render: () => (
    <div className="fixed bottom-0 right-20 z-10">
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <div className="rounded-md bg-blue-500 px-3 py-2 font-semibold text-white">
          <span className="text-gray-300">Customized Demo of</span>
          {` Next.js Boilerplate`}
        </div>
      </a>
    </div>
  ),
};
