import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

const AuthButtons = () => {
  return (
    <>
      <Link
        href='/sign-up'
        className={buttonVariants()}
      >
        Sign Up
      </Link>
      <Link
        href='/sign-in'
        className={buttonVariants({ variant: 'outline' })}
      >
        Login
      </Link>
    </>
  );
};

export default AuthButtons;
