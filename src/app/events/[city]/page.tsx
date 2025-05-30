import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalize } from '@/lib/utils';

type TProps = {
  params: {
    city: string;
  };
};

type TEventsPageProps = TProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: TProps) {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`
  };
}

export default async function EventsPage({
  params,
  searchParams
}: TEventsPageProps) {
  const { city } = params;
  const page = searchParams.page || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
