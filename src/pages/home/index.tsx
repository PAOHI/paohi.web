import CallToAction from './CallToAction';
import Hero from './Hero';
import OurServices from './WhatWeDo';
import HowItWorks from './HowItWorks';

const Home = () => {
  return (
    <main className='pt-[2rem] pb-[5rem] space-y-[5rem] px-6 lg:px-0'>
      <Hero />
      <OurServices />
      <CallToAction />
      <HowItWorks />
    </main>
  );
};

export default Home;
