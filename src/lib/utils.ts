import { PrismaClient } from '@prisma/client';
import clsx, { ClassValue } from 'clsx';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const prisma = new PrismaClient();

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEventsData(city: string) {
  if( city !== 'all') return notFound();

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city)
    },
    orderBy: {
      date: 'asc'
    }
  });

  if (events.length === 0) return notFound();

  return events;
}

export async function getEventData(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug }
  });

  if (!event) return notFound();

  return event;
}
