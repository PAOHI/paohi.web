import Home from './home';
import WhoWeAre from './whoWeAre';
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
const WhoWeArePage: React.FC = () => <WhoWeAre />;
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
  WhoWeArePage,
  WhatWeDoPage,
  OurApproachPage,
  PublicationsPage,
  ResearchPapersPage,
  NewsPage,
  ProjectsPage,
  GetInvolvedPage,
  NotFoundPage,
};
