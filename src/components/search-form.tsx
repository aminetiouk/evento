"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("")
  const route = useRouter();
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!searchText) return;

    route.push(`/events/${searchText}`);
  }
  return (
    <form
      className="
        w-full
        sm:w-[35rem]
      "
      onSubmit={handleChange}
    >
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
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
  );
}
