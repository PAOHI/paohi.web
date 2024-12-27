import Home from './home';
import AboutUs from './whoWeAre/aboutUs';
import Team from './whoWeAre/team';
import Partners from './whoWeAre/partners';
import WhatWeDo from './whatWeDo';
import OurApproach from './ourApproach';
import Publications from './resources/publications';
import ResearchPapers from './resources/researchPapers';
import News from './resources/news';
import Projects from './projects';
import GetInvolved from './getInvolved';

import NotFound from './notFound';

// pages
const HomePage: React.FC = () => <Home />;
const AboutUsPage: React.FC = () => <AboutUs />;
const TeamPage: React.FC = () => <Team />;
const PartnersPage: React.FC = () => <Partners />;
const WhatWeDoPage: React.FC = () => <WhatWeDo />;
const OurApproachPage: React.FC = () => <OurApproach />;
const PublicationsPage: React.FC = () => <Publications />;
const ResearchPapersPage: React.FC = () => <ResearchPapers />;
const NewsPage: React.FC = () => <News />;
const ProjectsPage: React.FC = () => <Projects />;
const GetInvolvedPage: React.FC = () => <GetInvolved />;

const NotFoundPage: React.FC = () => <NotFound />;

// export
export {
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
};
