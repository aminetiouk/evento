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

export async function getEventsData(city: string, page = 1) {
  if (city !== 'all') {
    const cityExists = await prisma.eventoEvent.findFirst({
      where: {
        city: capitalize(city)
      }
    });

    if (!cityExists) return notFound();
  }

  const whereClause = {
    city: city === 'all' ? undefined : capitalize(city)
  };

  const events = await prisma.eventoEvent.findMany({
    where: whereClause,
    orderBy: {
      date: 'asc'
    },
    take: 6,
    skip: (page - 1) * 6
  });

  const totalCount = await prisma.eventoEvent.count({
    where: whereClause
  });

  return {
    totalPages: Math.ceil(totalCount / 6),
    events
  };
}

export async function getEventData(slug: string) {
  if (!slug) return notFound();

  const event = await prisma.eventoEvent.findUnique({
    where: { slug }
  });

  if (!event) return notFound();

  return event;
}
