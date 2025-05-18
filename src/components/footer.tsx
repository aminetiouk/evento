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
    <footer className="mt-auto flex justify-between items-center px-3 sm:px-9 text-base text-white/50 h-14">
      <small>&copy; 2025 Amine. All right reserved</small>
      <ul className='flex-center space-x-4'>
        {routes.map(route => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
