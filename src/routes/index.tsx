import {
  HomePage,
  WhoWeArePage,
  OurServicesPage,
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
  { path: '/who-we-are', element: <WhoWeArePage /> },
  { path: '/our-services', element: <OurServicesPage /> },
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
