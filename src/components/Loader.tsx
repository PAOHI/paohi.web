import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className='flex items-center justify-center min-h-[200px] w-full'>
      <Loader2 className='h-8 w-8 animate-spin text-primary' />
    </div>
  );
};

export default Loader;
