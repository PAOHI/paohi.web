import { home3, john } from '@/assets';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Content Data
const cards: CardType[] = [
  {
    title: 'Our Mission',
    description:
      'Strengthening the health systems in the region through institutionalization of integrated transdisciplinary and multisectoral One Health strategy, evidence policymaking, strategic planning, innovative capacity building, resources mobilization, and the development and implementation of cost-effective interventions.',
    className: 'md:row-span-2',
  },
  {
    title: 'Our Vision',
    description:
      'Integrating all sectors under the multisectoral and transdisciplinary One Health strategy empowered with advanced technology to achieve the health and wellbeing of humans, animals, and the environment as well as socioeconomic stability and growth in Africa.',
  },
  {
    title: 'Core Values',
    description: (
      <ul className='list-none space-y-2'>
        <li className='flex items-start'>
          <span className='text-primary mr-2'>•</span>
          <span>
            <strong>Impactful Work:</strong> We strive for society benefits initiatives.
          </span>
        </li>
        <li className='flex items-start'>
          <span className='text-primary mr-2'>•</span>
          <span>
            <strong>Integrity First:</strong> We do what is right.
          </span>
        </li>
        <li className='flex items-start'>
          <span className='text-primary mr-2'>•</span>
          <span>
            <strong>Collaboration Matters:</strong> We foster teamwork and interdisciplinary partnerships.
          </span>
        </li>
      </ul>
    ),
    className: 'md:col-span-2',
  },
];

const boardOfDirectors: TeamMemberType[] = [
  { image: john, name: 'Dr. Jean Mugabo', role: 'Chairperson' },
  { image: john, name: 'Prof. Alice Uwase', role: 'Vice Chairperson' },
  { image: john, name: 'Dr. Claude Ndayisaba', role: 'Board Member' },
];

const coreTeam: TeamMemberType[] = [
  { image: john, name: 'John Niyontwali', role: 'Software Developer' },
  { image: john, name: 'Dr. Aline Mukamana', role: 'Research Lead' },
  { image: john, name: 'Eric Habimana', role: 'Project Manager' },
];

const adminTeam: TeamMemberType[] = [
  { image: john, name: 'Claire Uwimbabazi', role: 'Administrative Director' },
  { image: john, name: 'Emmanuel Nsengiyumva', role: 'Operations Manager' },
  { image: john, name: 'Sandrine Uwamahoro', role: 'HR Manager' },
];

// Components
const TeamGrid = ({ members }: { members: TeamMemberType[] }) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
    {members.map((member, index) => (
      <div key={index} className='text-center group mt-10'>
        <div className='rounded-lg overflow-hidden mb-4 transition-transform duration-1000 group-hover:scale-[1.02] w-48 h-48 mx-auto'>
          <img
            src={member.image}
            alt={member.name}
            className='w-full h-full object-cover object-top rounded-full border-4 border-primary/20'
          />
        </div>
        <h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
        <p className='text-gray-600'>{member.role}</p>
      </div>
    ))}
  </div>
);

const WhoWeAre = () => {
  return (
    <main className='relative bg-primary/10'>
      {/* Hero Section */}

      <div className='relative pt-[12rem] pb-32'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='relative w-full h-96 rounded-lg overflow-hidden'>
              <img src={home3} alt='One health' className='w-full h-full object-cover' />
            </div>
            <div className='space-y-6 p-4'>
              <h1 className='text-4xl md:text-5xl text-primary font-[800]'>Who We Are</h1>
              <p className='text-gray-700 text-lg'>
                We are dedicated to strengthening health systems across Africa by integrating advanced technology and
                transdisciplinary strategies to achieve the health and wellbeing of humans, animals, and the
                environment. Our mission drives impactful work and collaboration across sectors to foster socioeconomic
                stability and growth.
              </p>
              <Button variant='default'>Our Approach</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className='relative pb-24'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center'>
            <div className='grid md:grid-cols-2 gap-x-2 gap-y-1 lg:col-span-3 max-w-4xl mx-auto w-full'>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl ${
                    typeof card.description === 'string' ? 'md:h-[300px]' : ''
                  } bg-primary/10 ${card.className}`}
                >
                  <div className='p-8 flex flex-col h-full'>
                    <h3 className='text-2xl mb-4 font-semibold text-primary'>{card.title}</h3>
                    <div className='text-gray-600 flex-1'>
                      {typeof card.description === 'string' ? <p>{card.description}</p> : card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='relative pb-24 bg-neutral-50'>
        <div className='max-w-6xl mx-auto px-4 py-16'>
          <div className='text-center mb-16 bg-primary/10 py-10 rounded-3xl'>
            <h2 className='font-serif text-4xl md:text-5xl text-primary font-[800]'>Meet the team</h2>
            <p className='text-gray-700 max-w-3xl mx-auto'>
              We are a growing team of experts, including scientists, researchers, doctors, lawyers, designers,
              developers, and business people. All on a mission to educate, empower, and help you be #ReProductive.
            </p>
          </div>

          <Tabs defaultValue='board'>
            <TabsList className='grid grid-cols-3 max-w-[400px] mx-auto bg-primary/5 p-1 rounded-lg'>
              <TabsTrigger value='board' className='data-[state=active]:bg-primary/15 rounded-md'>
                Board of Directors
              </TabsTrigger>
              <TabsTrigger value='core' className='data-[state=active]:bg-primary/15 rounded-md'>
                Core Team
              </TabsTrigger>
              <TabsTrigger value='admin' className='data-[state=active]:bg-primary/15 rounded-md'>
                Admin Team
              </TabsTrigger>
            </TabsList>
            <div className='mt-6 px-4'>
              <TabsContent value='board'>
                <TeamGrid members={boardOfDirectors} />
              </TabsContent>
              <TabsContent value='core'>
                <TeamGrid members={coreTeam} />
              </TabsContent>
              <TabsContent value='admin'>
                <TeamGrid members={adminTeam} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
