import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import { logo } from '@/assets';
import { hideNavbarRoutes, navItems } from '@/constants';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Helper function to determine if current route should hide navbar
  const isRouteHidden = (path: string) => {
    return hideNavbarRoutes.some(route => path.startsWith(route));
  };

  // Render individual navigation link with active state handling
  const renderNavLink = (item: (typeof navItems)[number], isMobile = false) => {
    const isActive = location.pathname === item.path;

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`
          text-base font-medium transition-all duration-300 
          ${
            isActive
              ? 'bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-semibold'
              : 'text-black hover:text-gray-600'
          }
          ${isMobile ? 'w-full' : ''}
        `}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  // Don't render navbar on certain routes
  if (isRouteHidden(location.pathname)) {
    return null;
  }

  return (
    <nav className='bg-white/10 fixed left-0 right-0 z-50 backdrop-blur-md'>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-6'>
        {/* Logo Section */}
        <div className='flex items-center space-x-10'>
          <Link to='/' className='flex-shrink-0'>
            <img src={logo} alt='Company Logo' className='h-[100px] w-auto' />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>{navItems.map(item => renderNavLink(item))}</div>
        </div>

        {/* Desktop Right Section */}
        <div className='hidden lg:flex items-center space-x-6'>
          <>
            <Link to='/login' className='flex items-center text-base font-medium text-black hover:text-gray-600'>
              Login
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>

            <Button onClick={() => navigate('create-account')}>Get Started</Button>
          </>

          {/* Language Selector */}
        </div>

        {/* Mobile Navigation Container */}
        <div className='lg:hidden flex items-center space-x-4'>
          <button
            className='text-gray-800'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle navigation'
          >
            {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white shadow-md'>
          <div className='flex flex-col items-start space-y-4 px-6 py-4'>
            {navItems.map(item => renderNavLink(item, true))}

            <Link
              to='/login'
              className={`text-base font-medium text-black hover:text-gray-600 w-full py-2 
                ${
                  location.pathname === '/login'
                    ? 'bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-semibold'
                    : ''
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>

            <Button
              className='bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 rounded-md shadow-md hover:opacity-90 w-full'
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('create-account');
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
