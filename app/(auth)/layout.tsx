import { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='absolute top-4 left-4 flex items-center gap-2'>
        <Link
          href='/'
          className={buttonVariants({ variant: 'secondary', size: 'lg' })}
        >
          <ArrowLeft />
          Back
        </Link>
      </div>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
