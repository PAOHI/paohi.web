import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface HowItWorksCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const HowItWorksCard = ({ icon: Icon, title, description }: HowItWorksCardProps) => {
  return (
    <div className='relative rounded-lg p-[1px] bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40'>
      <div className='relative rounded-lg bg-white'>
        <Card className='w-full bg-transparent border-0 shadow-none'>
          <CardHeader className='text-[1.25rem]'>
            <div className='flex items-center space-x-3'>
              <div className='bg-primary/10 p-3 rounded-full'>
                <Icon className='w-5 h-5 text-primary' strokeWidth={1.5} />
              </div>
              <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className='text-gray-700 px-6'>{description}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorksCard;
