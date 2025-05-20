import cn from '@/lib/utils';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: HeaderProps) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold tracking-tight lg:text-6xl',
        className
      )}
    >
      {children}
    </h1>
  );
}
