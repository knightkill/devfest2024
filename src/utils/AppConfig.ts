import type { LocalePrefixMode } from 'next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'GDG Baroda DevFest 2024',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
