import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from './LocaleSwitcher';

export const DashboardNav = () => {
  const t = useTranslations('DashboardLayout');

  return (
    <>
      <li>
        <Link href="/dashboard/" className="border-none text-gray-700 hover:text-gray-900">
          {t('dashboard_link')}
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/user-profile/"
          className="border-none text-gray-700 hover:text-gray-900"
        >
          {t('user_profile_link')}
        </Link>
      </li>
      <li>
        <SignOutButton>
          <button
            type="button"
            className="border-none text-gray-700 hover:text-gray-900"
          >
            {t('sign_out')}
          </button>
        </SignOutButton>
      </li>
      <li>
        <LocaleSwitcher />
      </li>
    </>
  );
};
