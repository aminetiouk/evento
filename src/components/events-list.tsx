
import { EventoEvent } from '@/generated/prisma';
import EventCard from './event-card';
import { getEventsData } from '@/lib/utils';

type EventsListProps = {
  city: string;
};
export default async function EventsList({ city }: EventsListProps) {
  const response = await getEventsData(city);

  const events: EventoEvent[] = await response.json();
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
