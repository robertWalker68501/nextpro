import { ReactNode } from 'react';

import Navbar from '@/components/navigation/Navbar';

const SharedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default SharedLayout;
