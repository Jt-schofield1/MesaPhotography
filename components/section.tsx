import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: 'default' | 'sm';
}

export default function Section({ children, className, id, size = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(size === 'sm' ? 'section-sm' : 'section', 'container mx-auto px-4', className)}
    >
      {children}
    </section>
  );
}

