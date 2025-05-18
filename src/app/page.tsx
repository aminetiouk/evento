import Link from "next/link";

export default function Home() {
  return (
    <main
      className="
        flex flex-col
        px-3 pt-36
        items-center
      "
    >
      <h1
        className="
          text-3xl font-bold tracking-tight
          lg:text-6xl
        "
      >
        Find events around you
      </h1>
      <p
        className="
          mb-12 mt-7
          text-2xl
          opacity-75
          lg:text-3xl
        "
      >
        Browse more than{" "}
        <span
          className="
            font-bold text-accent
            italic underline
          "
        >
          10,000 events
        </span>{" "}
        around you
      </p>

      <form
        className="
          w-full
          sm:w-[35rem]
        "
      >
        <input
          placeholder="Search events in any city..."
          spellCheck={false}
          className="
            h-16 w-full
            px-6
            text-xl
            bg-white/[7%]
            rounded-lg
            outline-none ring-accent/50 focus:bg-white/10 focus:ring-2
          "
        />
      </form>

      <section
        className="
          flex
          mt-4
          text-sm text-white/50
          gap-x-4
        "
      >
        <p>Popular:</p>
        <div
          className="
            space-x-2
            font-semibold
          "
        >
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
