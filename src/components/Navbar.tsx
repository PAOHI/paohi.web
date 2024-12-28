import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { logo } from '@/assets';
import { hideNavbarRoutes, navItems } from '@/constants';

interface NavItem {
  label: string;
  path?: string;
  dropdownItems?: {
    label: string;
    path: string;
  }[];
}

const Dropdown = ({
  item,
  isMobile = false,
  onItemClick,
}: {
  item: NavItem;
  isMobile?: boolean;
  onItemClick?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => !isMobile && setIsOpen(true);
  const handleMouseLeave = () => !isMobile && setIsOpen(false);
  const handleClick = () => isMobile && setIsOpen(!isOpen);

  const isActiveDropdown = item.dropdownItems?.some(dropdownItem => location.pathname === dropdownItem.path);

  return (
    <div
      className={`${isMobile ? 'w-full' : 'relative'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className={`flex items-center space-x-1 ${
          isMobile ? 'w-full py-2 text-left' : 'py-4'
        } text-base font-medium transition-all duration-500 ${
          isActiveDropdown ? 'text-primary' : 'text-gray-700 hover:text-primary'
        }`}
      >
        <span className='inline-block'>
          <span className={isActiveDropdown ? 'text-primary' : ''}>{item.label}</span>
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isMobile ? (
        <div
          className={`
            overflow-hidden transition-all duration-500
            ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {item.dropdownItems?.map(dropdownItem => (
            <Link
              key={dropdownItem.path}
              to={dropdownItem.path}
              className={`block pl-4 py-2 text-[1rem] transition-all duration-500 ${
                location.pathname === dropdownItem.path ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => {
                setIsOpen(false);
                onItemClick?.();
              }}
            >
              <span className={location.pathname === dropdownItem.path ? 'text-primary' : ''}>
                {dropdownItem.label}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div
          className={`
            absolute left-0 mt-0
            transform-gpu transition-all duration-500 ease-in-out
            ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
            bg-white rounded-lg shadow-lg py-2 z-50 w-48
          `}
        >
          <div
            className={`
              absolute bg-white w-3 h-3 rotate-45 top-0 left-1/4 
              transform -translate-y-1/2
              transition-opacity duration-500
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}
          ></div>

          {item.dropdownItems?.map(dropdownItem => (
            <Link
              key={dropdownItem.path}
              to={dropdownItem.path}
              className={`block px-4 py-2 text-[1rem] transition-all duration-500 ${
                location.pathname === dropdownItem.path
                  ? 'text-primary mx-2'
                  : 'text-gray-700 hover:bg-primary/10 mx-2 rounded-lg'
              }`}
              onClick={() => {
                setIsOpen(false);
                onItemClick?.();
              }}
            >
              <span className={location.pathname === dropdownItem.path ? 'text-primary' : ''}>
                {dropdownItem.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0 && currentScrollY < 500) {
        setIsHidden(true);
        setIsSticky(false);
      } else if (currentScrollY >= 500) {
        setIsHidden(false);
        setIsSticky(true);
      } else {
        setIsHidden(false);
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRouteHidden = (path: string): boolean => {
    return hideNavbarRoutes.some(route => path.startsWith(route));
  };

  const renderNavItem = (item: NavItem, isMobile = false) => {
    if (item.dropdownItems) {
      return (
        <Dropdown
          key={item.label}
          item={item}
          isMobile={isMobile}
          onItemClick={() => isMobile && setIsMobileMenuOpen(false)}
        />
      );
    }

    return item.path ? (
      <Link
        key={item.path}
        to={item.path}
        className={`
          text-base font-medium transition-all duration-500 
          ${location.pathname === item.path ? 'text-primary' : 'text-gray-700 hover:text-primary'}
          ${isMobile ? 'w-full py-2' : ''}
        `}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {item.label}
      </Link>
    ) : null;
  };

  if (isRouteHidden(location.pathname)) return null;

  return (
    <nav
      className={`
        fixed left-0 right-0 z-50 
        transition-all duration-500 backdrop-blur-md
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
        ${isSticky ? 'bg-white/10' : 'bg-white/10'}
      `}
    >
      <div className='max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-0'>
        <div className='flex items-center space-x-10'>
          <Link to='/' className='flex-shrink-0'>
            <img src={logo} alt='Logo' className='h-[90px] py-2 w-auto' />
          </Link>

          <div className='hidden lg:flex items-center space-x-8'>{navItems.map(item => renderNavItem(item))}</div>
        </div>

        <div className='hidden lg:flex items-center space-x-6'>
          <Link
            to='/projects'
            className={`flex items-center text-base font-medium transition-all duration-500 group ${
              location.pathname === '/projects' ? 'text-primary' : 'text-gray-700 hover:text-primary'
            }`}
          >
            <span className={location.pathname === '/projects' ? 'text-primary' : ''}>Projects</span>
            <ArrowRight size={20} className='ml-1 group-hover:translate-x-[3px] transition-all duration-500' />
          </Link>

          <Button onClick={() => navigate('/get-involved')}>Get Involved</Button>
        </div>

        <div className='lg:hidden flex items-center space-x-4'>
          <button
            className='text-gray-700'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle navigation menu'
          >
            {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      <div
        className={`
          lg:hidden fixed inset-x-0 top-[90px] bg-white shadow-md
          transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          overflow-hidden
        `}
        style={{
          maxHeight: isMobileMenuOpen ? '100vh' : '0',
          transition: 'max-height 500ms ease-in-out, opacity 500ms ease-in-out, transform 500ms ease-in-out',
        }}
      >
        <div
          className={`
          flex flex-col items-start space-y-4 px-6 py-4
          transform transition-all duration-500 bg-[#fbf9fe]
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}
        `}
        >
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className={`
                w-full transform transition-all duration-500 delay-[${index * 100}ms]
                ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
              `}
            >
              {renderNavItem(item, true)}
            </div>
          ))}

          <div
            className={`
            w-full pt-2 border-t border-gray-100 transform transition-all duration-500 delay-[${
              navItems.length * 100
            }ms]
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `}
          >
            <Link
              to='/projects'
              className={`
                flex items-center justify-between w-full py-3 mb-3
                text-base font-medium transition-all duration-500
                ${location.pathname === '/projects' ? 'text-primary' : 'text-gray-700 hover:text-primary'}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={location.pathname === '/projects' ? 'text-primary' : ''}>Projects</span>
              <ArrowRight
                size={18}
                className={`
                  transition-all duration-500
                  ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-4'}
                `}
              />
            </Link>

            <Button
              className={`
                w-full transform transition-all duration-500 delay-[${(navItems.length + 1) * 100}ms]
                ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
              `}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/get-involved');
              }}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
