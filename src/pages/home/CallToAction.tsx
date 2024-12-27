import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { partners } from '@/constants';

const CallToAction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: { email: string }) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <section
      className='py-[20vh] bg-[#f8f6f3] relative'
      style={{
        backgroundImage: "url('wave.webp')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='relative bg-white rounded-3xl max-w-6xl mx-auto py-20 px-24'>
        <div className='absolute -top-16 right-0'>
          <svg width='64' height='127' viewBox='0 0 64 127' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.65948 5.63422C42.5025 -13.5856 49.4233 57.1188 27.5936 51.2416C5.76382 45.3645 41.779 6.91799 57.8628 46.7242C74.1998 87.1572 22.0498 123.344 22.0498 123.344M22.0498 123.344C22.0498 123.344 36.5784 126.54 43.3704 122.174M22.0498 123.344C22.0498 123.344 19.093 111.965 24.187 102.99'
              stroke='#4169e1'
              strokeWidth='4'
            />
          </svg>
        </div>
        <div className='grid lg:grid-cols-2 gap-14 items-center'>
          <div className='space-y-6'>
            <h1>
              <h1 className='text-4xl md:text-5xl font-serif bg-gradient-to-b from-primary to-accent inline-block text-transparent bg-clip-text'>
                Partner <br /> <span className='italic'> with Us </span>
              </h1>
              <span className='text-[5rem]'>🤝</span>
            </h1>
            <p className='text-lg text-gray-600'>
              Drive innovation in African healthcare through evidence-based solutions and integrated One Health
              approaches.
            </p>
          </div>

          <div className='flex flex-col space-y-4'>
            <p className='text-lg text-gray-600'>
              Join leading organizations in transforming health systems across Africa. Access research, policy insights,
              and implementation expertise.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='bg-[#f8f6f3] flex justify-between p-2 rounded-full relative'
            >
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className='rounded-full bg-transparent outline-none px-6 w-full'
                placeholder='Your professional email'
              />
              <Button type='submit' className='rounded-full'>
                Partner Now
              </Button>
              {errors.email && (
                <span className='absolute -bottom-6 text-sm text-red-500 transition-all duration-1000 ease-in-out'>
                  {errors.email.message}
                </span>
              )}
            </form>
            <p className='text-sm pt-3 text-gray-500'>
              Get exclusive partnership insights and opportunities. Priority access to research and events.
            </p>
          </div>
        </div>
        <div className='mt-16 text-center'>
          <p className='text-gray-600 mb-8 text-lg font-semibold bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text'>
            In Partnership with:
          </p>
          <div className='flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto'>
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target='_blank'
                rel='noopener noreferrer'
                className='h-12 hover:opacity-80 transition-opacity'
              >
                <img src={partner.logo} alt={partner.name} className='h-full object-contain' title={partner.name} />
              </a>
            ))}
          </div>
          <p className='mt-8 text-sm text-gray-500'>Leading the transformation of African healthcare systems</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
