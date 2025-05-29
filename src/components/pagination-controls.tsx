import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const btnStyles =
  'flex justify-center gap-x-2 text-white/50 text-lg rounded-md items-center bg-white/10 px-4 py-2 ';

export default function PaginationControls() {
  return (
    <section className="flex justify-between  w-full">
      <Link href="/events/all?page=2" className={btnStyles}>
        <Image
          src="/arrow-left.svg"
          alt="Previous page arrow"
          width={12}
          height={12}
          className="opacity-50"
        />
        Previous
      </Link>
      <Link href="/events/all?page=1" className={btnStyles}>
        Next
        <Image
          src="/arrow-right.svg"
          alt="Next page arrow"
          width={12}
          height={12}
          className="opacity-50"
        />
      </Link>
    </section>
  );
}
