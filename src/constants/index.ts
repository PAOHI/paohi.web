import { MessagesSquare, Package2 } from 'lucide-react';

import {
  home1,
  home2,
  home3,
  home4,
  home5,
  find,
  dtu,
  universityOfCop,
  erasmus,
  africaResearchExcellence,
  aims,
  rbc,
  insp,
  aiim,
  universityOfOxford,
} from '../assets';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Who We Are',
    path: '/who-we-are',
  },
  {
    label: 'Our Services',
    path: '/our-services',
  },
  { label: 'Our Approach', path: '/our-approach' },
  {
    label: 'Achievements',
    dropdownItems: [
      { label: 'Publications', path: '/publications' },
      { label: 'Research Papers', path: '/research-papers' },
      { label: 'News', path: '/news' },
    ],
  },
];

export const footerItems: FooterItem = {
  resources: [
    { label: 'Publications', path: '/publications' },
    { label: 'Research Papers', path: '/research-papers' },
    { label: 'News', path: '/news' },
  ],
  quickLinks: [
    { label: 'Get Involved', path: '/get-involved' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Team', path: '/team' },
    { label: 'Partners', path: '/partners' },
  ],
};

export const images = [
  { id: 'home1', src: home1, alt: 'Healthcare professional', height: 'h-[140px] md:h-[180px] lg:h-[220px]' },
  { id: 'home3', src: home3, alt: 'Veterinary care', height: 'h-[140px] md:h-[180px] lg:h-[220px]' },
  { id: 'home2', src: home2, alt: 'Environmental research', height: 'h-[180px] md:h-[220px] lg:h-[280px]' },
  { id: 'home4', src: home4, alt: 'Laboratory research', height: 'h-[120px] md:h-[150px] lg:h-[180px]' },
  { id: 'home5', src: home5, alt: 'Community health worker', height: 'h-[260px] md:h-[320px] lg:h-[400px]' },
];

export const partners = [
  {
    name: 'University of Oxford - Global Health Network',
    logo: universityOfOxford,
    url: 'https://tghn.org/',
  },
  {
    name: 'AIIm',
    logo: aiim,
    url: 'https://g.allm.net/',
  },
  {
    name: 'INSP',
    logo: insp,
    url: '',
  },
  {
    name: 'Rwanda Biomedical Centre',
    logo: rbc,
    url: 'https://rbc.gov.rw/',
  },
  {
    name: 'African Institute for Mathematical Sciences',
    logo: aims,
    url: 'https://nexteinstein.org/',
  },
  {
    name: 'Africa Research Excellence Fund',
    logo: africaResearchExcellence,
    url: 'https://africaresearchexcellencefund.org.uk/',
  },
  {
    name: 'Erasmus MC',
    logo: erasmus,
    url: 'https://www.erasmusmc.nl/nl-nl/',
  },
  {
    name: 'University of Copenhagen',
    logo: universityOfCop,
    url: 'https://www.ku.dk/english/',
  },
  {
    name: 'Technical University of Denmark - DTU',
    logo: dtu,
    url: 'https://www.dtu.dk/english/',
  },
  {
    name: 'Find',
    logo: find,
    url: 'https://www.finddx.org/',
  },
];

// routes
export const hideNavbarRoutes = ['/discover', '/account-creation-confirmation', '/email-verification'];
export const hideFooterRoutes = [
  '/login',
  '/forgot-password',
  '/reset-password',
  '/create-account',
  '/discover',
  '/account-creation-confirmation',
  '/email-verification',
];

// local storage constant
export const CURRENCY_STORAGE_KEY = 'panafrica_preferredCurrency';

export const navLinks = [
  { href: '/messages', label: 'Messages', icon: MessagesSquare },
  { href: '/discover', label: 'Discover', icon: Package2 },
];

export const profiles = [
  {
    id: 1,
    name: 'John Niyontwali',
    position: 'Software Developer',
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Doe',
    position: 'UI/UX Designer',
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Michael Smith',
    position: 'Data Scientist',
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Michael Smith',
    position: 'Data Scientist',
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Michael Smith',
    position: 'Data Scientist',
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Michael Smith',
    position: 'Data Scientist',
    imageSrc: 'https://via.placeholder.com/150',
  },
];

export const posts = [
  {
    id: 1,
    name: 'John Niyontwali',
    time: 'Posted 2 mins ago',
    title: 'Building Scalable React Applications',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    time: 'Posted 1 hour ago',
    title: 'The Importance of User-Centric Design',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'Michael Smith',
    time: 'Posted 3 hours ago',
    title: 'Exploring Machine Learning Algorithms',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];
