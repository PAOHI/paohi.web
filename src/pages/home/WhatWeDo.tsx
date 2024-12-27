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
      className={`px-[3rem] py-[4rem] bg-primary/5 transition-colors h-fit border-none hover:cursor-pointer text-black ${className} transition-all duration-500 hover:-translate-y-3 shadow-md shadow-white rounded-3xl group`}
    >
      <div className='mb-6'>
        <Icon className='w-10 h-10 ' strokeWidth={1.5} />
      </div>
      <h2 className='text-3xl font-bold mb-4 '>{title}</h2>
      <p className='text-lg'>{description}</p>
      <div className='mt-6 flex items-center'>
        <span className='text-lg font-medium underline group-hover:no-underline cursor-pointer'>Read More</span>
        <ArrowRight size={20} className='ml-1 group-hover:translate-x-[5px] transition-all duration-500' />
      </div>
    </Card>
  );
};

const WhatWeDo = () => {
  const services = [
    {
      title: 'Situation Analysis',
      description:
        'We provide support in implementation of comprehensive situation analysis and risk assessment exercise to identify priorities in One Health context.',
      icon: BookOpen,
      hoverClass: 'hover:bg-[#fff1e6]',
      slug: 'situation-analysis',
    },
    {
      title: 'Capacity Building',
      description:
        'Through innovative training programs, we support building the institutional, national, and regional capacity in scientific and implementation health research.',
      icon: GraduationCap,
      hoverClass: 'hover:bg-[#e6f7ff]',
      slug: 'capacity-building',
    },
    {
      title: 'Research & Evidence',
      description:
        'We generate accurate and up to date evidence through transdisciplinary scientific, health systems, and operational research to guide policymaking and planning.',
      icon: LineChart,
      hoverClass: 'hover:bg-[#fff7e6]',
      slug: 'research-and-evidence',
    },
    {
      title: 'Technical Support',
      description:
        'We provide timely and high quality technical, scientific, and leadership support to institutes and entities working on human, animal, and environmental health.',
      icon: Users,
      hoverClass: 'hover:bg-[#f3e8ff]',
      slug: 'technical-support',
    },
  ];

  return (
    <div className='max-w-6xl mx-auto '>
      <div className='grid grid-cols-2 gap-10'>
        <div className='space-y-10'>
          <h1 className='text-6xl font-[800] bg-gradient-to-b from-primary to-accent inline-block text-transparent bg-clip-text'>
            What We
            <br />
            Do{' '}
          </h1>
          <WhatWeDoCard {...services[2]} className={services[2].hoverClass} />
          <WhatWeDoCard {...services[3]} className={services[3].hoverClass} />
        </div>
        <div className='space-y-10'>
          <WhatWeDoCard {...services[0]} className={services[0].hoverClass} />
          <WhatWeDoCard {...services[1]} className={services[1].hoverClass} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
