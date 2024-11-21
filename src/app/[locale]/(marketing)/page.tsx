import { Sponsors } from '@/components/Sponsors';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-8">
        {t('welcome_message')}
      </h1>
      <p className="mt-4 text-center whitespace-pre-line">
        {t('event_details')}
      </p>

      <div className="mt-8 text-center">
        <a
          href="https://gdg.community.dev/events/details/google-gdg-baroda-presents-gdg-baroda-devfest-2024/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Register Now
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Event Schedule
        </h2>
        <ul className="list-disc list-inside">
          <li>09:00 AM - Registration & Networking</li>
          <li>10:00 AM - Opening Keynote</li>
          <li>11:00 AM - Technical Sessions</li>
          <li>01:00 PM - Lunch Break</li>
          <li>02:00 PM - Workshops</li>
          <li>05:00 PM - Closing Remarks</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Featured Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 text-center">
            <Image
              src="/assets/images/speaker1.jpg"
              alt="Speaker 1"
              width={150}
              height={150}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p>Senior Developer at TechCorp</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <Image
              src="/assets/images/speaker2.jpg"
              alt="Speaker 2"
              width={150}
              height={150}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold">John Smith</h3>
            <p>Lead Engineer at InnovateX</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <Image
              src="/assets/images/speaker3.jpg"
              alt="Speaker 3"
              width={150}
              height={150}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold">Alice Johnson</h3>
            <p>CTO at DevSolutions</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why Attend?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Learn from industry experts</li>
          <li>Hands-on workshops and sessions</li>
          <li>Networking opportunities with peers</li>
          <li>Latest trends and technologies</li>
          <li>Exclusive giveaways and prizes</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Sponsors
        </h2>
        <Sponsors />
      </section>

      <footer className="mt-16 border-t border-gray-300 py-8 text-center text-sm">
        © {new Date().getFullYear()} Google GDG Baroda DevFest 2024.{' '}
        {t.rich(`made_with`, {
          author: () => (
            <a
              href="https://gdgbaroda.com"
              className="text-blue-700 hover:border-b-2 hover:border-blue-700"
            >
              GDG Baroda
            </a>
          ),
        })}
      </footer>
    </>
  );
}
