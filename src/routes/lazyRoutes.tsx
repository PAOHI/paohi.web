import { lazy } from 'react';

export const HomePage = lazy(() => import('@/pages/home'));
export const WhoWeArePage = lazy(() => import('@/pages/whoWeAre'));
export const OurServicesPage = lazy(() => import('@/pages/ourServices'));
export const OurApproachPage = lazy(() => import('@/pages/ourApproach'));
export const PublicationsPage = lazy(() => import('@/pages/resources/publications'));
export const ResearchPapersPage = lazy(() => import('@/pages/resources/researchPapers'));
export const NewsPage = lazy(() => import('@/pages/resources/news'));
export const ProjectsPage = lazy(() => import('@/pages/projects'));
export const GetInvolvedPage = lazy(() => import('@/pages/getInvolved'));
export const NotFoundPage = lazy(() => import('@/pages/notFound'));
