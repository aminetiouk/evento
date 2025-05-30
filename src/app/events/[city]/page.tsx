import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalize } from '@/lib/utils';
import { z } from 'zod';
import { notFound } from 'next/navigation';

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

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams
}: TEventsPageProps) {
  const { city } = params;
  const parsePage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsePage.success) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsePage} fallback={<Loading />}>
        <EventsList city={city} page={parsePage.data} />
      </Suspense>
    </main>
  );
}
