'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ActiveLink({ href, children, className = '' }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} ${isActive ? 'bg-primary text-primary-foreground' : ''}`}>
      {children}
    </Link>
  );
}
