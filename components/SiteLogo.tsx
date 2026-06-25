import Link from 'next/link';

const SiteLogo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-8'
    >
      <h1 className='text-3xl font-bold'>
        Next<span className='text-primary'>Pro</span>
      </h1>
    </Link>
  );
};

export default SiteLogo;
