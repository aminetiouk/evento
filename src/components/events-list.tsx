import EventCard from './event-card';
import { getEventsData } from '@/lib/utils';
import PaginationControls from './pagination-controls';
import { redirect } from 'next/navigation';

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { totalPages, events } = await getEventsData(city, page);

  if (page > totalPages) redirect(`/events/${city}?page=${totalPages}`);

  const prevPage = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPage = page < totalPages ? `/events/${city}?page=${page + 1}` : '';

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls prevPage={prevPage} nextPage={nextPage} />
    </section>
  );
}
