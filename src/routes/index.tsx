import {
  HomePage,
  AboutUsPage,
  TeamPage,
  PartnersPage,
  WhatWeDoPage,
  OurApproachPage,
  PublicationsPage,
  ResearchPapersPage,
  NewsPage,
  ProjectsPage,
  GetInvolvedPage,
  NotFoundPage,
} from '@/pages';

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about-us', element: <AboutUsPage /> },
  { path: '/team', element: <TeamPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/what-we-do', element: <WhatWeDoPage /> },
  { path: '/our-approach', element: <OurApproachPage /> },
  { path: '/publications', element: <PublicationsPage /> },
  { path: '/research-papers', element: <ResearchPapersPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/partners', element: <GetInvolvedPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/get-involved', element: <GetInvolvedPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
