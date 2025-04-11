import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { footerItems, hideFooterRoutes } from '@/constants';
import { LinkedInIcon, TwitterIcon } from './SocialIcons';
import { logo } from '@/assets';

const Footer: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const isRouteHidden = (path: string) => {
    return hideFooterRoutes.some(route => path.startsWith(route));
  };

  if (isRouteHidden(location.pathname)) {
    return null;
  }

  return (
    <footer className='w-full bg-primary/10 text-dark pt-12'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Main Content */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-8'>
          {/* Logo and About Section - Full width on mobile */}
          <div className='col-span-2 md:col-span-1 space-y-4'>
            <Link to='/' className='block'>
              <img src={logo} alt='PAOHI Logo' className='h-[200px] w-auto' />
            </Link>
            <p className='text-sm text-dark mt-4'>
              Advancing One Health initiatives across Africa through research, education, and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-dark text-lg'>Quick Links</h3>
            <ul className='space-y-2'>
              {footerItems.quickLinks.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className='text-sm text-dark hover:text-dark/70 transition-colors duration-200'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-dark text-lg'>Resources</h3>
            <ul className='space-y-2'>
              {footerItems.resources.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className='text-sm text-dark hover:text-dark/70 transition-colors duration-200'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social - Full width on mobile */}
          <div className='col-span-2 md:col-span-1 space-y-4'>
            <h3 className='font-semibold text-dark text-lg'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-dark hover:text-dark/70'
              >
                <TwitterIcon />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-dark hover:text-dark/70'
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-dark'>Email: contact@paohi.org</p>
              <p className='text-sm text-dark'>Phone: +46 76-775 28 04</p>
            </div>
          </div>
        </div>

        <Separator className='my-8 bg-primary' />

        {/* Bottom Section - Stack on mobile */}
        <div className='py-6 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0'>
          <div className='text-sm text-dark order-2 md:order-1'>
            &copy; {currentYear} Pan-African One Health Institute (PAOHI). All rights reserved.
          </div>
          <div className='order-1 md:order-2'>
            <Link to='/privacy' className='text-sm text-dark hover:text-dark/70'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
