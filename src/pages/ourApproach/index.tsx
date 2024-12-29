import { Brain, Heart, Leaf, ArrowRight, Users, ChartBar, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { community, oneHealth, researcher, training } from '@/assets';
import { useNavigate } from 'react-router-dom';

const OurApproach = () => {
  const navigate = useNavigate();
  const pillars = [
    {
      icon: <Brain className='w-8 h-8 text-primary' />,
      title: 'Human Health',
      description:
        'Strengthening health systems through integrated approaches and capacity building for sustainable development in Africa.',
    },
    {
      icon: <Heart className='w-8 h-8 text-primary' />,
      title: 'Animal Health',
      description:
        'Supporting comprehensive One Health strategies for animal welfare and disease surveillance across the region.',
    },
    {
      icon: <Leaf className='w-8 h-8 text-primary' />,
      title: 'Environmental Health',
      description:
        'Integrating climate change resilience into health programs and promoting sustainable ecological practices.',
    },
  ];

  const coreValues = [
    {
      icon: <ChartBar className='w-6 h-6 text-primary' />,
      title: 'Impactful Work',
      description: 'We strive for society benefits initiatives',
    },
    {
      icon: <Shield className='w-6 h-6 text-primary' />,
      title: 'Integrity First',
      description: 'We do what is right',
    },
    {
      icon: <Users className='w-6 h-6 text-primary' />,
      title: 'Collaboration Matters',
      description: 'We foster teamwork and interdisciplinary partnerships',
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero */}
      <div className='bg-primary/5 pt-[10rem]'>
        <div className='max-w-6xl mx-auto px-4 py-12 md:py-16'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='text-center md:text-left'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary'>One Health Approach</h1>
              <p className='mt-4 text-gray-600 text-sm md:text-base'>
                Integrating all sectors under a multisectoral and transdisciplinary strategy, empowered with advanced
                technology to achieve health and wellbeing across human, animal, and environmental domains in Africa.
              </p>
            </div>
            <div className='max-w-xs mx-auto md:max-w-sm'>
              <div className='aspect-[4/3]'>
                <img src={oneHealth} alt='One Health Initiative' className='rounded-lg object-cover w-full h-full' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* Core Values */}
      <div className='max-w-5xl mx-auto px-4 py-12 md:py-16'>
        <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-primary'>Our Core Values</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {coreValues.map((value, index) => (
            <Card key={index} className='p-6 text-center  '>
              <div className='flex justify-center mb-4'>{value.icon}</div>
              <h3 className='text-lg font-semibold mt-4 text-primary'>{value.title}</h3>
              <p className='mt-2 text-gray-600 text-sm'>{value.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Strategic Focus */}
      <div className='bg-primary/5'>
        <div className='max-w-5xl mx-auto px-4 py-12 md:py-16'>
          <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-primary'>Our Methodology</h2>
          <Tabs defaultValue='research'>
            <TabsList className='mb-6'>
              <TabsTrigger value='research'>Research</TabsTrigger>
              <TabsTrigger value='implement'>Implementation</TabsTrigger>
              <TabsTrigger value='capacity'>Capacity Building</TabsTrigger>
            </TabsList>

            <TabsContent value='research'>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-2xl '>
                <div>
                  <h3 className='text-xl font-semibold text-primary'>Evidence-Based Research</h3>
                  <p className='mt-4 text-gray-600'>
                    Conducting transdisciplinary scientific research to guide policymaking and implementation
                    strategies.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Comprehensive situation analysis
                    </li>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Risk assessment and prioritization
                    </li>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Health systems research
                    </li>
                  </ul>
                </div>
                <img src={researcher} alt='Research Approach' className='rounded-lg ' />
              </div>
            </TabsContent>

            <TabsContent value='implement'>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg '>
                <div>
                  <h3 className='text-xl font-semibold text-primary'>Implementation Strategy</h3>
                  <p className='mt-4 text-gray-600'>
                    Supporting the institutionalization of integrated One Health approaches at regional and national
                    levels.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Technical support and guidance
                    </li>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Climate change integration
                    </li>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Public-private partnerships
                    </li>
                  </ul>
                </div>
                <img src={community} alt='Implementation Strategy' className='rounded-lg ' />
              </div>
            </TabsContent>

            <TabsContent value='capacity'>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg '>
                <div>
                  <h3 className='text-xl font-semibold text-primary'>Capacity Building</h3>
                  <p className='mt-4 text-gray-600'>
                    Strengthening human resources for health to lead sustainable development initiatives.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Innovative training programs
                    </li>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Leadership development
                    </li>
                    <li className='flex items-center gap-2'>
                      <ArrowRight className='w-4 h-4 text-primary' />
                      Institutional strengthening
                    </li>
                  </ul>
                </div>
                <img src={training} alt='Capacity Building' className='rounded-lg ' />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Impact Areas */}
      <div className='max-w-5xl mx-auto px-4 py-12 md:py-16'>
        <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-primary'>Our Focus Areas</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {pillars.map((pillar, index) => (
            <Card key={index} className='p-6  '>
              {pillar.icon}
              <h3 className='text-lg font-semibold mt-4 text-primary'>{pillar.title}</h3>
              <p className='mt-2 text-gray-600 text-sm'>{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className='bg-primary/5'>
        <div className='max-w-5xl mx-auto px-4 py-12 md:py-16 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-primary'>Join Our Mission</h2>
          <p className='mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base'>
            Help us create a healthier Africa through integrated One Health solutions and sustainable development.
          </p>
          <div className='flex justify-center mt-8'>
            <Button onClick={() => navigate('/get-involved')}>
              Partner With Us
              <ArrowRight className='ml-2 w-4 h-4' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
