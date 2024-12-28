import { AlertCircle } from 'lucide-react';

const Empty = ({ message = 'No data available', icon: Icon = AlertCircle }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center px-4'>
      <Icon className='text-gray-400 w-16 h-16 mb-4' />
      <small className='text-sm text-gray-600'>{message}</small>
    </div>
  );
};

export default Empty;
