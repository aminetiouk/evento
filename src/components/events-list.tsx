import { TEvents } from '@/lib/type';
import EventCard from './event-card';

type EventsListProps = {
  city: string;
}
export default async function EventsList({ city }: EventsListProps) {
  const response = await fetch(
      `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
      {
        // next: { revalidate: 60 }
      }
    );
    const events: TEvents[] = await response.json();
  return (
    <section className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
