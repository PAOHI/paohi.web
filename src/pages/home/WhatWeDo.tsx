import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, GraduationCap, LineChart, Users } from 'lucide-react';

const WhatWeDoCard = ({ title, description, className, icon: Icon, slug }: WhatWeDoCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${slug}`);
  };

  return (
    <Card
      onClick={handleClick}
      className={`px-4 sm:px-8 lg:px-[3rem] py-6 sm:py-8 lg:py-[4rem] bg-primary/5 transition-colors h-fit border-none hover:cursor-pointer text-black ${className} lg:transition-all lg:duration-500 lg:hover:-translate-y-3 shadow-md shadow-white rounded-3xl group`}
    >
      <div className='mb-4 lg:mb-6 '>
        <Icon className='w-8 h-8 lg:w-10 lg:h-10' strokeWidth={1.5} />
      </div>
      <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2 lg:mb-4 '>{title}</h2>
      <p className='text-base lg:text-lg '>{description}</p>
      <div className='mt-4 lg:mt-6 flex items-center '>
        <span className='text-base lg:text-lg font-medium underline lg:group-hover:no-underline cursor-pointer'>
          Read More
        </span>
        <ArrowRight size={20} className='ml-1 lg:group-hover:translate-x-[5px] lg:transition-all lg:duration-500' />
      </div>
    </Card>
  );
};

const WhatWeDo = ({ showTitle }: { showTitle: boolean }) => {
  const services = [
    {
      title: 'Situation Analysis',
      description:
        'We provide support in implementation of comprehensive situation analysis and risk assessment exercise to identify priorities in One Health context.',
      icon: BookOpen,
      hoverClass: 'lg:hover:bg-[#fff1e6]',
      slug: 'situation-analysis',
    },
    {
      title: 'Capacity Building',
      description:
        'Through innovative training programs, we support building the institutional, national, and regional capacity in scientific and implementation health research.',
      icon: GraduationCap,
      hoverClass: 'lg:hover:bg-[#e6f7ff]',
      slug: 'capacity-building',
    },
    {
      title: 'Research & Evidence',
      description:
        'We generate accurate and up to date evidence through transdisciplinary scientific, health systems, and operational research to guide policymaking and planning.',
      icon: LineChart,
      hoverClass: 'lg:hover:bg-[#fff7e6]',
      slug: 'research-and-evidence',
    },
    {
      title: 'Technical Support',
      description:
        'We provide timely and high quality technical, scientific, and leadership support to institutes and entities working on human, animal, and environmental health.',
      icon: Users,
      hoverClass: 'lg:hover:bg-[#f3e8ff]',
      slug: 'technical-support',
    },
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 my-8 sm:my-12 lg:my-[5rem]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10'>
        <div className='space-y-4 sm:space-y-6 lg:space-y-10'>
          {showTitle && (
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-primary font-[800] text-center lg:text-left '>
              What We <br /> Do
            </h1>
          )}
          <WhatWeDoCard {...services[2]} className={services[2].hoverClass} />
          <WhatWeDoCard {...services[3]} className={services[3].hoverClass} />
        </div>
        <div className='space-y-4 sm:space-y-6 lg:space-y-10'>
          <WhatWeDoCard {...services[0]} className={services[0].hoverClass} />
          <WhatWeDoCard {...services[1]} className={services[1].hoverClass} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
