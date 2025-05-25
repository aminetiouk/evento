import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalize } from '@/lib/utils';

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props) {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`
  };
}

export default async function EventsPage({ params }: Props) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
