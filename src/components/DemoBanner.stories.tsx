import type { Meta, StoryObj } from '@storybook/react';
import messages from '@/locales/en.json';
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import { DemoBanner } from './DemoBanner';

const meta: Meta<typeof DemoBanner> = {
  title: 'Components/DemoBanner',
  component: DemoBanner,
  parameters: {
    // Add any global parameters here
  },
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DemoBanner>;

export const Default: Story = {};

export const Customized: Story = {
  render: () => (
    <div className="sticky top-0 z-50 bg-blue-600 p-4 text-center text-lg font-semibold text-white [&_a:hover]:text-yellow-500 [&_a]:text-green-500">
      Live Demo of Customized Next.js Boilerplate -
      {' '}
      <Link href="/sign-up">Explore the Enhanced Authentication</Link>
    </div>
  ),
};
