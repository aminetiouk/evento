'use client';

import { EventoEvent } from '@prisma/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] w-[500px]"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      initial={{
        opacity: 0,
        scale: 0.8
      }}
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
          style={{ width: 'auto', height: 'auto' }}
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
    </MotionLink>
  );
}
