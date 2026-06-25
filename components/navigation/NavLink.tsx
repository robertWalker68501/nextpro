'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  classes?: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({ href, label, classes, onClick, isMobile }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        isActive && '',
        isMobile && '',
        classes
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;
