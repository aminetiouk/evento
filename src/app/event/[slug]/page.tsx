import H1 from '@/components/h1';
import { TEvent } from '@/lib/type';
import Image from 'next/image';

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: TEvent = await response.json();

  return (
    <main>
      <section className="relative flex  justify-center items-center z-0 py-14 md:py-20 overflow-hidden">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          className="object-cover blur-3xl"
          fill
          priority
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 z-1 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            className="w-full rounded-lg border-1 border-accent object-cover"
            width={300}
            height={201}
            quality={100}
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <H1 className="mb-2 mt-1 lg:text-5xl whitespace-nowrap">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75 mb-4 lg:mb-0">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 w-[95vw] sm:w-full 
                    mt-auto py-2 rounded-md capitalize border-2 border-white/10">
              Get tickets
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
