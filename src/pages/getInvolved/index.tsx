import { Heart, Users, GraduationCap, HandHeart } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { join } from '@/assets';

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
    // Handle form submission
    console.log(data);
    onSubmitSuccess?.(data);
  };

  return (
    <div className='min-h-screen bg-primary/5 '>
      {/* Rest of the component remains the same */}
      {/* Hero Section */}
      <div className='relative bg-primary/10 py-16 pt-[10rem]'>
        <div className='max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-4xl font-[800] mb-4'>Join Our Mission</h1>
            <p className='text-lg text-gray-700'>
              Be part of our mission to integrate human, animal, and environmental health for a sustainable future in
              Africa. Your expertise and passion can make a difference.
            </p>
            <div className='flex gap-4 mt-8'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
                  <Users className='w-4 h-4 text-white' />
                </div>
                <span>Collaborative Impact</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
                  <Heart className='w-4 h-4 text-white' />
                </div>
                <span>One Health Approach</span>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='rounded-3xl overflow-hidden shadow-xl'>
              <img src={join} alt='One Health professionals working together' className='w-full h-full object-cover' />
            </div>
            <div className='absolute -z-10 top-8 right-8 w-full h-full bg-primary/30 rounded-3xl'></div>
          </div>
        </div>
      </div>

      {/* Engagement Options */}
      <div className='max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8'>
        <div className='p-6 border rounded-lg'>
          <HandHeart className='w-12 h-12 text-primary mb-4' />
          <h3 className='text-xl font-[800] mb-2'>Volunteer</h3>
          <p>Join our field projects and contribute to community health initiatives</p>
          <p className='text-sm text-muted-foreground'>Make a direct impact in communities</p>
        </div>
        <div className='p-6 border rounded-lg'>
          <GraduationCap className='w-12 h-12 text-primary mb-4' />
          <h3 className='text-xl font-[800] mb-2'>Research</h3>
          <p>Participate in One Health research and development projects</p>
          <p className='text-sm text-muted-foreground'>Contribute to evidence-based solutions</p>
        </div>
        <div className='p-6 border rounded-lg'>
          <Users className='w-12 h-12 text-primary mb-4' />
          <h3 className='text-xl font-[800] mb-2'>Partnership</h3>
          <p>Collaborate with us on One Health initiatives</p>
          <p className='text-sm text-muted-foreground'>Join our network of partners</p>
        </div>
      </div>

      {/* Our Focus Areas */}
      <div className='max-w-3xl mx-auto px-4 py-12'>
        <h2 className='text-3xl font-[800] mb-8'>Areas of Engagement</h2>
        <Accordion type='single' collapsible>
          <AccordionItem value='research'>
            <AccordionTrigger>One Health Research & Development</AccordionTrigger>
            <AccordionContent>
              Participate in innovative research projects that integrate human, animal, and environmental health. We
              conduct transdisciplinary scientific research to guide evidence-based policymaking and implementation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='capacity'>
            <AccordionTrigger>Capacity Building</AccordionTrigger>
            <AccordionContent>
              Join our training programs aimed at strengthening institutional and regional capacity in scientific and
              implementation health research. Help build the next generation of One Health leaders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='technical'>
            <AccordionTrigger>Technical Support</AccordionTrigger>
            <AccordionContent>
              Provide expertise in situation analysis, risk assessment, and implementation of One Health strategies at
              regional, national, and subnational levels.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact Form */}
      <div className='max-w-3xl mx-auto px-4 py-12'>
        <h2 className='text-3xl font-[800] mb-8'>Express Your Interest</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder='Your name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='Your email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type='tel' placeholder='Your phone number' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='profession'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Background *</FormLabel>
                    <FormControl>
                      <Input placeholder='Your field of expertise' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='interest'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area of Interest *</FormLabel>
                  <FormControl>
                    <Input placeholder='Which area would you like to contribute to?' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us more about your interest *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Share your relevant experience and how you would like to contribute'
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
