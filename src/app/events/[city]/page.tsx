import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { TEvents } from '@/lib/type';

type EventsPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = await params;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: { revalidate: 60 }
    }
  );
  const events: TEvents[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <EventsList events={events} />
    </main>
  );
}
