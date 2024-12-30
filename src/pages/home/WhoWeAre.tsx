import { homeBgTexture } from '@/assets';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WhoWeAre = () => {
  const navigate = useNavigate();
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
    <div className='relative bg-primary/20 py-12 md:py-24 mt-10 md:mt-0'>
      <div
        className='absolute inset-0 w-full bg-cover bg-center opacity-50 overflow-hidden'
        style={{ backgroundImage: `url(${homeBgTexture})` }}
      />
      <main className='relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Header Section */}
          <div className='space-y-4 lg:col-span-1 text-center lg:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl text-primary font-extrabold leading-tight'>
              Discover <br />
              <span>Who We Are</span>
            </h1>
            <p className='text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0'>
              Dedicated to advancing holistic wellbeing and sustainable socioeconomic progress in Africa.
            </p>
            <div className='pt-2'>
              <Button className='w-full sm:w-auto' onClick={() => navigate('who-we-are')}>
                Read More
              </Button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className='grid md:grid-cols-2 md:gap-x-[0.8vw] gap-y-[3vw] md:gap-y-[0.4vw] lg:col-span-2'>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${card.className} ${
                  typeof card.description === 'string' ? 'h-fit md:h-[300px]' : 'auto'
                }`}
              >
                <div className='absolute inset-0 bg-background'></div>
                <div className='relative z-10 flex flex-col h-full p-6'>
                  <h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-dark'>{card.title}</h3>
                  <div className='text-dark/70 text-base lg:text-lg'>
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
