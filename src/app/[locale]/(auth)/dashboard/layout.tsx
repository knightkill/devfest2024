import { DashboardNav } from '@/components/DashboardNav';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { setRequestLocale } from 'next-intl/server';

export default async function DashboardLayout(props: { children: React.ReactNode; params: { locale: string } }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <BaseTemplate
      leftNav={<DashboardNav />}
      rightNav={null} // If you have separate right nav, create and use it here
    >
      {props.children}
    </BaseTemplate>
  );
}

export const dynamic = 'force-dynamic';
