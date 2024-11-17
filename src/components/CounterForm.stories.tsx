import type { Meta, StoryObj } from '@storybook/react';
import messages from '@/locales/en.json';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import { CounterForm } from './CounterForm';

const meta: Meta<typeof CounterForm> = {
  title: 'Components/CounterForm',
  component: CounterForm,
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CounterForm>;

export const Default: Story = {
  args: {},
};
