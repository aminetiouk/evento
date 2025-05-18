import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex flex-col min-h-screen max-w-7xl bg-white/[2%]">
      {children}
    </div>
  );
}
