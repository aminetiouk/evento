import H1 from '@/components/h1';
import SearchForm from '@/components/search-form';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col px-3 pt-36 items-center">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl opacity-75 lg:text-3xl">
        Browse more than{' '}
        <span className="font-bold text-accent italic underline">
          10,000 events{' '}
        </span>{' '}
        around you
      </p>

      <SearchForm />

      <section className="flex mt-4 text-sm text-white/50 gap-x-4">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
