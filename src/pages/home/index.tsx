import CallToAction from './CallToAction';
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';

const Home = () => {
  return (
    <main className='pt-[2rem]'>
      <Hero />
      <WhoWeAre />
      <WhatWeDo showTitle={true} />
      <CallToAction />
    </main>
  );
};

export default Home;
