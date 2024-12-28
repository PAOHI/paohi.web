import { homeBgTexture } from '@/assets';
import { Button } from '@/components/ui/button';

const WhoWeAre = () => {
  const cards = [
    {
      title: 'Our Mission',
      description:
        'Strengthening the health systems in the region through institutionalization of integrated transdisciplinary and multisectoral One Health strategy, evidence policymaking, strategic planning, innovative capacity building, resources mobilization, and the development and implementation of cost-effective interventions.',
      className: 'md:row-span-2',
    },
    {
      title: 'Our Vision',
      description:
        'Integrating all sectors under the multisectoral and transdisciplinary One Health strategy empowered with advanced technology to achieve the health and wellbeing of human, animals, and the environment as well as socioeconomic stability and growth in Africa.',
    },
    {
      title: 'Core Values',
      description: (
        <ul className='list-none space-y-2'>
          <li className='flex items-start'>
            <span className='text-yellow-400 mr-2'>•</span>
            <span>
              <strong>Impactful Work:</strong> We strive for society benefits initiatives
            </span>
          </li>
          <li className='flex items-start'>
            <span className='text-yellow-400 mr-2'>•</span>
            <span>
              <strong>Integrity First:</strong> We do what is right
            </span>
          </li>
          <li className='flex items-start'>
            <span className='text-yellow-400 mr-2'>•</span>
            <span>
              <strong>Collaboration Matters:</strong> We foster teamwork and interdisciplinary partnerships
            </span>
          </li>
        </ul>
      ),
      className: 'md:col-span-2',
    },
  ];

  return (
    <div className='relative bg-primary/20 py-24'>
      <div
        className='absolute inset-0 w-full bg-cover bg-center opacity-50 overflow-hidden'
        style={{ backgroundImage: `url(${homeBgTexture})` }}
      />
      <main className='relative z-10 max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          <div className='space-y-4 lg:col-span-1'>
            <h1 className='text-4xl md:text-5xl text-primary font-[800]'>
              Discover <br />
              <span className=''>Who We Are</span>
            </h1>
            <p className='text-gray-600 text-lg'>
              Dedicated to advancing holistic wellbeing and sustainable socioeconomic progress in Africa.
            </p>
            <div>
              <Button>Read More</Button>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-x-2 gap-y-1 lg:col-span-2 justify-center'>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${card.className}`}
                style={{
                  height: 'fit-content',
                }}
              >
                <div className={`absolute inset-0 bg-background`} />
                <div
                  className={`relative z-10 p-6 flex flex-col ${
                    typeof card.description === 'string' ? 'md:h-[300px]' : ''
                  }`}
                >
                  <h3 className='text-dark text-2xl font-bold mb-3 leading-normal tracking-normal '>{card.title}</h3>
                  <div className='text-dark/70 '>
                    {typeof card.description === 'string' ? <p>{card.description}</p> : card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhoWeAre;
