import Link from 'next/link';

const routes = [
  {
    name: 'Terms & Conditions',
    path: '/terms-conditions'
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policy'
  }
];

export default function Footer() {
  return (
    <footer className="flex h-14 mt-auto px-3 text-xs sm:text-base text-white/25
      border-t border-white/10 justify-between items-center sm:px-9"
    >
      <small className='text-xs'>&copy; 2025 Amine. All right reserved</small>
      <ul className="flex-center gap-x-3 sm:gap-x-8">
        {routes.map(route => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
