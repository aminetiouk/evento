import Link from 'next/link';
import H1 from '@/components/h1';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-8">City not found</H1>
      <p className="text-white/75 text-xl text-center mb-8">
        The city you&apos;re looking for doesn&apos;t exist in our database.
      </p>
      <Link
        href="/events/all"
        className="bg-white/20 py-2 px-4 rounded-md capitalize border-2 border-white/10 state-effects"
      >
        View all events
      </Link>
    </main>
  );
}
