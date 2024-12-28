import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('400 1em HostGrotesk'),
        document.fonts.load('500 1em HostGrotesk'),
        document.fonts.load('700 1em HostGrotesk'),
      ]).then(() => {
        setIsLoading(false);
      });
    } else {
      // Fallback for browsers that don't support font loading API
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className='flex items-center justify-center h-screen'>
      <Loader2 className='h-12 w-12 animate-spin text-primary' />
    </div>
  );
};

export default Loader;
