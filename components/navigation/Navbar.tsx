import AuthButtons from '@/components/auth/AuthButtons';
import NavLink from '@/components/navigation/NavLink';
import SiteLogo from '@/components/SiteLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-between py-5'>
      <SiteLogo />

      {/* Desktop Links */}
      <div className='flex items-center gap-2'>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            label={link.label}
          />
        ))}
      </div>

      {/* Nav Buttons */}
      <div className='flex items-center gap-2'>
        <AuthButtons />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
