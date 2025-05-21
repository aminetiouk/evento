import { TEvents } from '@/lib/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type EventCardProps = {
  event: TEvents;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] w-[500px]"
    >
      <section
        className="flex flex-col overflow-hidden w-full h-full bg-white/[3%] 
        rounded-xl relative state-effects "
      >
        <Image
          alt={event.name}
          src={event.imageUrl}
          width={500}
          height={280}
          quality={100}
          priority
          className="object-cover h-[60%]"
        />
        <div className="flex flex-col flex-1 items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="text-white/75 italic">{event.organizerName}</p>
          <p className="mt-4 text-sm text-white/50">{event.location}</p>
        </div>
        <section
          className="flex flex-col w-[45px] h-[45px] bg-black/30 rounded-md
          absolute top-[12px] left-[12px] items-center justify-center"
        >
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString('en-US', {
              day: '2-digit'
            })}
          </p>
          <p className="text-xs text-accent uppercase">
            {new Date(event.date).toLocaleDateString('en-US', {
              month: 'short'
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
