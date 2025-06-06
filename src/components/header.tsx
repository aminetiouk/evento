'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import cn from '@/lib/utils';

const routes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'All Events',
    path: '/events/all'
  }
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex h-14 px-3 border-b border-white/10 items-center justify-between sm:px-9">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image
              src="/logoEvento.png"
              alt="Evento logo"
              width={120}
              height={50}
              quality={100}
              priority
              style={{
                objectFit: 'contain',
                width: 'auto',
                height: 'auto'
              }}
            />
      </Link>

      <nav className="h-full">
        <ul className="flex text-xl gap-x-6 h-full">
          {routes.map(route => (
            <li
              key={route.path}
              className={cn(
                'transition relative flex items-center hover:text-white',
                {
                  'text-white': activePathname === route.path,
                  'text-white/50': activePathname !== route.path
                }
              )}
            >
              <Link
                href={route.path}
                className="block h-full flex items-center"
              >
                {route.name}
              </Link>

              {activePathname === route.path && (
                <motion.div
                  layoutId="h-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
