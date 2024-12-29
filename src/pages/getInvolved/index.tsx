import { Heart, Users, GraduationCap, HandHeart } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { join } from '@/assets';

interface FormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  interest: string;
  message: string;
}

interface GetInvolvedProps {
  onSubmitSuccess?: (data: FormData) => void;
  initialValues?: Partial<FormData>;
}

const GetInvolved: React.FC<GetInvolvedProps> = ({ onSubmitSuccess, initialValues }) => {
  const form = useForm<FormData>({
    defaultValues: {
      name: initialValues?.name || '',
      email: initialValues?.email || '',
      phone: initialValues?.phone || '',
      profession: initialValues?.profession || '',
      interest: initialValues?.interest || '',
      message: initialValues?.message || '',
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    onSubmitSuccess?.(data);
  };

  return (
    <div className='min-h-screen bg-primary/5 overflow-x-hidden'>
      {/* Hero Section */}
      <div className='relative bg-primary/10 py-8 sm:py-16 pt-[8rem] sm:pt-[6.5rem] md:pt-[10rem]'>
        <div className='max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-3xl sm:text-4xl font-[800] mb-4'>Join Our Mission</h1>
            <p className='text-base sm:text-lg text-gray-700'>
              Be part of our mission to integrate human, animal, and environmental health for a sustainable future in
              Africa. Your expertise and passion can make a difference.
            </p>
            <div className='flex  flex-row gap-4 mt-6 sm:mt-8'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
                  <Users className='w-4 h-4 text-white' />
                </div>
                <span className='text-sm sm:text-base'>Collaborative Impact</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
                  <Heart className='w-4 h-4 text-white' />
                </div>
                <span className='text-sm sm:text-base'>One Health Approach</span>
              </div>
            </div>
          </div>
          <div className='relative mt-6 sm:mt-0'>
            <div className='rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl'>
              <img
                src={join}
                alt='One Health professionals working together'
                className='w-full h-full object-cover aspect-[4/3]'
              />
            </div>
            <div className='absolute -z-10 top-4 sm:top-8 right-4 sm:right-8 w-full h-full bg-primary/30 rounded-2xl sm:rounded-3xl'></div>
          </div>
        </div>
      </div>

      {/* Engagement Options */}
      <div className='max-w-6xl mx-auto px-4 py-8 sm:py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
        <div className='p-4 sm:p-6 border-[1px] border-muted/20 bg-white/10 rounded-xl sm:rounded-2xl'>
          <HandHeart className='w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4' />
          <h3 className='text-lg sm:text-xl font-[800] mb-2'>Volunteer</h3>
          <p className='text-sm sm:text-base'>Join our field projects and contribute to community health initiatives</p>
          <p className='text-xs sm:text-sm text-muted mt-2'>Make a direct impact in communities</p>
        </div>
        <div className='p-4 sm:p-6 border-[1px] border-muted/20 bg-white/10 rounded-xl sm:rounded-2xl'>
          <GraduationCap className='w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4' />
          <h3 className='text-lg sm:text-xl font-[800] mb-2'>Research</h3>
          <p className='text-sm sm:text-base'>Participate in One Health research and development projects</p>
          <p className='text-xs sm:text-sm text-muted mt-2'>Contribute to evidence-based solutions</p>
        </div>
        <div className='p-4 sm:p-6 border-[1px] border-muted/20 bg-white/10 rounded-xl sm:rounded-2xl'>
          <Users className='w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4' />
          <h3 className='text-lg sm:text-xl font-[800] mb-2'>Partnership</h3>
          <p className='text-sm sm:text-base'>Collaborate with us on One Health initiatives</p>
          <p className='text-xs sm:text-sm text-muted mt-2'>Join our network of partners</p>
        </div>
      </div>

      {/* Our Focus Areas */}
      <div className='max-w-3xl mx-auto px-4 py-8 sm:py-12'>
        <h2 className='text-2xl sm:text-3xl font-[800] mb-6 sm:mb-8'>Areas of Engagement</h2>
        <Accordion type='single' collapsible className='space-y-2'>
          <AccordionItem value='research'>
            <AccordionTrigger className='text-base sm:text-lg px-4'>One Health Research & Development</AccordionTrigger>
            <AccordionContent className='px-4'>
              Participate in innovative research projects that integrate human, animal, and environmental health. We
              conduct transdisciplinary scientific research to guide evidence-based policymaking and implementation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='capacity'>
            <AccordionTrigger className='text-base sm:text-lg px-4'>Capacity Building</AccordionTrigger>
            <AccordionContent className='px-4'>
              Join our training programs aimed at strengthening institutional and regional capacity in scientific and
              implementation health research. Help build the next generation of One Health leaders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='technical'>
            <AccordionTrigger className='text-base sm:text-lg px-4'>Technical Support</AccordionTrigger>
            <AccordionContent className='px-4'>
              Provide expertise in situation analysis, risk assessment, and implementation of One Health strategies at
              regional, national, and subnational levels.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact Form */}
      <div className='max-w-3xl mx-auto px-4 py-8 sm:py-12'>
        <h2 className='text-2xl sm:text-3xl font-[800] mb-6 sm:mb-8'>Express Your Interest</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid sm:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm sm:text-base'>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder='Your name' {...field} className='text-sm sm:text-base' />
                    </FormControl>
                    <FormMessage className='text-xs sm:text-sm' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm sm:text-base'>Email *</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='Your email' {...field} className='text-sm sm:text-base' />
                    </FormControl>
                    <FormMessage className='text-xs sm:text-sm' />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid sm:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm sm:text-base'>Phone Number</FormLabel>
                    <FormControl>
                      <Input type='tel' placeholder='Your phone number' {...field} className='text-sm sm:text-base' />
                    </FormControl>
                    <FormMessage className='text-xs sm:text-sm' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='profession'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm sm:text-base'>Professional Background *</FormLabel>
                    <FormControl>
                      <Input placeholder='Your field of expertise' {...field} className='text-sm sm:text-base' />
                    </FormControl>
                    <FormMessage className='text-xs sm:text-sm' />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='interest'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm sm:text-base'>Area of Interest *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Which area would you like to contribute to?'
                      {...field}
                      className='text-sm sm:text-base'
                    />
                  </FormControl>
                  <FormMessage className='text-xs sm:text-sm' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm sm:text-base'>Tell us more about your interest *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Share your relevant experience and how you would like to contribute'
                      rows={5}
                      {...field}
                      className='text-sm sm:text-base'
                    />
                  </FormControl>
                  <FormMessage className='text-xs sm:text-sm' />
                </FormItem>
              )}
            />

            <Button type='submit' className='w-full'>
              Submit Expression of Interest
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default GetInvolved;
