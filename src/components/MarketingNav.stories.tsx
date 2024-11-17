import type { Meta, StoryObj } from '@storybook/react';
import messagesEn from '@/locales/en.json';
import { NextIntlClientProvider } from 'next-intl';
import { MarketingNav } from './MarketingNav';

type Locale = 'en' | 'fr';

const meta: Meta<typeof MarketingNav> = {
  title: 'Components/MarketingNav',
  component: MarketingNav,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      const locale: Locale = 'en';
      const messages = messagesEn;

      return (
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof MarketingNav>;

// Default Story in English
export const Default: Story = {
  args: {
    locale: 'en',
  },
};

// Customized Story in French
export const French: Story = {
  args: {
    locale: 'fr',
  },
};

// Story with Custom Links
export const WithCustomLinks: Story = {
  args: {
    locale: 'en',
  },
  render: () => (
    <NextIntlClientProvider locale="en" messages={messagesEn}>
      <MarketingNav />
      {/* You can add custom links or additional props here */}
    </NextIntlClientProvider>
  ),
};
