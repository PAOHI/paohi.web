import { Brain, Heart, Leaf, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OurApproach = () => {
  const pillars = [
    {
      icon: <Brain className='w-8 h-8 text-primary' />,
      title: 'Human Health',
      description: 'Promoting community wellbeing through preventive care',
    },
    {
      icon: <Heart className='w-8 h-8 text-primary' />,
      title: 'Animal Health',
      description: 'Supporting wildlife conservation and veterinary care',
    },
    {
      icon: <Leaf className='w-8 h-8 text-primary' />,
      title: 'Environmental Health',
      description: 'Protecting ecosystems and promoting sustainability',
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero */}
      <div className='bg-primary/5 pt-[10rem]'>
        <div className='max-w-5xl mx-auto px-4 py-12 md:py-16 '>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h1 className='text-4xl font-bold'>One Health Approach</h1>
              <p className='mt-4 text-gray-600'>Unifying human, animal, and environmental health.</p>
              <Button className='mt-6'>Learn More</Button>
            </div>
            <div className='relative aspect-video'>
              <img src='/api/placeholder/600/400' alt='One Health' className='rounded-lg object-cover' />
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className='max-w-5xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-3 gap-6'>
          {pillars.map((pillar, index) => (
            <Card key={index} className='p-6 '>
              {pillar.icon}
              <h3 className='text-lg font-semibold mt-4'>{pillar.title}</h3>
              <p className='mt-2 text-gray-600 text-sm'>{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className='bg-primary/5'>
        <div className='max-w-5xl mx-auto px-4 py-12'>
          <h2 className='text-2xl font-bold mb-8'>Our Methodology</h2>
          <Tabs defaultValue='research' className='w-full'>
            <TabsList className='w-full md:w-[400px] mb-6'>
              <TabsTrigger value='research'>Research</TabsTrigger>
              <TabsTrigger value='implement'>Implementation</TabsTrigger>
              <TabsTrigger value='evaluate'>Evaluation</TabsTrigger>
            </TabsList>

            <TabsContent value='research'>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg'>
                <div>
                  <h3 className='text-xl font-semibold'>Evidence-Based Research</h3>
                  <p className='mt-4 text-gray-600'>Combining scientific rigor with practical field experience.</p>
                  <ul className='mt-4 space-y-2'>
                    <li>• Community-based studies</li>
                    <li>• Disease surveillance</li>
                    <li>• Environmental monitoring</li>
                  </ul>
                </div>
                <img src='/api/placeholder/400/300' alt='Research' className='rounded-lg' />
              </div>
            </TabsContent>

            <TabsContent value='implement'>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg'>
                <div>
                  <h3 className='text-xl font-semibold'>Implementation Strategy</h3>
                  <p className='mt-4 text-gray-600'>Working with communities for sustainable solutions.</p>
                  <ul className='mt-4 space-y-2'>
                    <li>• Local partnerships</li>
                    <li>• Capacity building</li>
                    <li>• Sustainable practices</li>
                  </ul>
                </div>
                <img src='/api/placeholder/400/300' alt='Implementation' className='rounded-lg' />
              </div>
            </TabsContent>

            <TabsContent value='evaluate'>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg'>
                <div>
                  <h3 className='text-xl font-semibold'>Impact Evaluation</h3>
                  <p className='mt-4 text-gray-600'>Measuring outcomes through comprehensive evaluation.</p>
                  <ul className='mt-4 space-y-2'>
                    <li>• Data analysis</li>
                    <li>• Community feedback</li>
                    <li>• Outcome tracking</li>
                  </ul>
                </div>
                <img src='/api/placeholder/400/300' alt='Evaluation' className='rounded-lg' />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* CTA */}
      <div className='max-w-5xl mx-auto px-4 py-12 text-center'>
        <h2 className='text-2xl font-bold'>Join Our Mission</h2>
        <p className='mt-4 text-gray-600 max-w-xl mx-auto'>
          Help us create a healthier world through integrated solutions.
        </p>
        <Button className='mt-6'>
          Get Involved
          <ArrowRight className='ml-2 w-4 h-4' />
        </Button>
      </div>
    </div>
  );
};

export default OurApproach;
