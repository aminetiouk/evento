import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
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
  );
}