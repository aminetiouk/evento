import { TEvent } from '@/lib/type';
import EventCard from './event-card';

type EventsListProps = {
  events: TEvent[]
}
export default function EventsList({ events }: EventsListProps) {
  return (
    <section className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
