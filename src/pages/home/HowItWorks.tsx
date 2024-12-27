import HowItWorksCard from '@/components/HowItWorksCard';
import { MessageCircle, Users } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 py-8'>
      <div className='flex flex-col md:grid md:grid-cols-3 gap-4'>
        <HowItWorksCard
          icon={Users}
          title='Create Your Profile'
          description='Build your professional profile highlighting your experience, skills, and career goals'
        />
        <HowItWorksCard
          icon={Users}
          title='Match & Connect'
          description='Swipe through potential matches based on your professional interests and goals'
        />
        <HowItWorksCard
          icon={MessageCircle}
          title='Collaborate & Grow'
          description='Start meaningful conversations and explore opportunities together'
        />
      </div>
    </section>
  );
};

export default HowItWorks;
