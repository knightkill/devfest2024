'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LocaleSwitcher } from './LocaleSwitcher';

export const MarketingNav = () => {
  const t = useTranslations('RootLayout');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" onClick={toggleMenu} className="md:hidden">
        <span className="mb-1 block h-0.5 w-6 bg-gray-700"></span>
        <span className="mb-1 block h-0.5 w-6 bg-gray-700"></span>
        <span className="block h-0.5 w-6 bg-gray-700"></span>
      </button>
      <ul className={`flex flex-wrap gap-x-5 text-xl ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <li>
          <Link href="/" className="border-none text-gray-700 hover:text-gray-900">
            {t('home_link')}
          </Link>
        </li>
        <li>
          <Link href="/about/" className="border-none text-gray-700 hover:text-gray-900">
            {t('about_link')}
          </Link>
        </li>
        <li>
          <Link href="/counter/" className="border-none text-gray-700 hover:text-gray-900">
            {t('counter_link')}
          </Link>
        </li>
        <li>
          <Link href="/portfolio/" className="border-none text-gray-700 hover:text-gray-900">
            {t('portfolio_link')}
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/ixartz/Next-js-Boilerplate"
            className="border-none text-gray-700 hover:text-gray-900"
          >
            GitHub
          </a>
        </li>
        <li>
          <LocaleSwitcher />
        </li>
      </ul>
    </>
  );
};
