import { DemoBadge } from '@/components/DemoBadge';
import { MarketingNav } from '@/components/MarketingNav';
import { routing } from '@/libs/i18nNavigation';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import '@/styles/global.css';

export const metadata = {
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <BaseTemplate
            leftNav={<MarketingNav />}
            // If you have a separate rightNav, pass it here
          >
            {props.children}
            <DemoBadge />
          </BaseTemplate>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
