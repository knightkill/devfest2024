import { MarketingNav } from '@/components/MarketingNav';
import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full bg-bg-marketing bg-repeat-y px-1 text-gray-700 antialiased">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative z-10">
        <div className="mx-auto max-w-screen-md">
          <header className="flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center pb-8 pt-16">
              <Image className="mr-4 h-10" src="/path-to-logo.png" width={100} height={100} alt="Logo" />
              <h1 className="text-3xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
            </div>
            <div className="flex items-center">
              <MarketingNav />
            </div>
          </header>

          <main>
            {props.children}
          </main>

          <footer className="border-t border-gray-300 py-8 text-center text-sm">
            {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}
            {t.rich('made_with', {
              author: () => (
                <a
                  href="https://creativedesignsguru.com"
                  className="text-blue-700 hover:border-b-2 hover:border-blue-700"
                >
                  CreativeDesignsGuru
                </a>
              ),
            })}
            {/* Additional footer content */}
          </footer>
        </div>
      </div>
    </div>
  );
};
