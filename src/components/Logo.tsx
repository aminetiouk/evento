import Image from 'next/image';

export default function Logo() {
  return (
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
  );
}
