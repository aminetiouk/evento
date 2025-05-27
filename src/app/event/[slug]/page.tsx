import H1 from '@/components/h1';
import { EventoEvent } from '@/generated/prisma';
import { getEventData } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';

type TProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({params}: TProps): Promise<Metadata> {
  const slug = params.slug;

  const event = await getEventData(slug);

  return {
    title: event.name
  }
}

export default async function EventPage({ params }: TProps) {
  const slug = params.slug;
  const event: EventoEvent = await getEventData(slug);

  return (
    <main>
      <section
        className="relative flex justify-center items-center z-0
                py-14 md:py-20 overflow-hidden"
      >
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
            className="rounded-lg border-1 border-accent object-cover"
            width={300}
            height={201}
            quality={100}
          />
          <div className="flex flex-col">
            <p className="text-white/75 text-lg lg:text-2xl">
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <H1 className="mb-2 mt-1 lg:text-[40px] whitespace-nowrap">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75 mb-4 lg:mb-0">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="bg-white/20 mt-auto py-2 max-w-[380px] rounded-md 
                    capitalize border-2 border-white/10 state-effects"
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center min-h-[75vh] px-5 py-16">
        <Section>
          <SectionHeader>About this event</SectionHeader>
          <SectionParagraph>{event.description}</SectionParagraph>
        </Section>
        <Section>
          <SectionHeader>Location</SectionHeader>
          <SectionParagraph>{event.location}</SectionParagraph>
        </Section>
      </div>
    </main>
  );
}

type TChildren = {
  children: React.ReactNode;
};

function Section({ children }: TChildren) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeader({ children }: TChildren) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionParagraph({ children }: TChildren) {
  return (
    <p className="text-white/75 text-lg mx-auto max-w-4xl leading-8">
      {children}
    </p>
  );
}
