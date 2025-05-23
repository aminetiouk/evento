import Image from 'next/image';
import React from 'react';

export default function Loading() {
  return (
    <div className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
      {Array.from({length: 6}).map((_ , index) => (
        <Image key={index} className='animate-pulse' src='/skeleton.svg' alt='skeleton list card' height={100} width={300} />
      ))}
    </div>
  );
}
