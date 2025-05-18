import Link from "next/link";
import Logo from "./logo";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header
      className="
        flex
        h-14
        px-3
        border-b border-white/10
        items-center justify-between
        sm:px-9
      "
    >
      <Logo />
      <nav>
        <ul
          className="
            flex
            text-xl
            gap-x-6
          "
        >
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx("transition hover:text-white", {
                "text-white": activePathname === route.path,
                "text-white/50": activePathname !== route.path,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
