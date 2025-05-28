import Link from 'next/link';
import H1 from '@/components/h1';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-8">Page not found</H1>
      <p className="text-white/75 text-xl mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-white/20 py-2 px-4 rounded-md capitalize border-2 border-white/10 state-effects text-center hover:bg-white/30 transition-colors"
        >
          Go to Home
        </Link>
        <Link
          href="/events/all"
          className="bg-white/20 py-2 px-4 rounded-md capitalize border-2 border-white/10 state-effects text-center hover:bg-white/30 transition-colors"
        >
          Browse all events
        </Link>
      </div>
    </main>
  );
}
