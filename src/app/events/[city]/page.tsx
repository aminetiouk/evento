import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalize } from '@/lib/utils';

type Props = {
  params: Promise<{
    city: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props) {
  const { city } = await params;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`
  };
}


export default async function EventsPage({ params, searchParams }: Props) {
  const { city } = await params;
  const { page = '1' } = await searchParams;

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
