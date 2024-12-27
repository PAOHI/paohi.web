import { useState, useCallback, memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { images } from '@/constants';

const ImageCard = memo(({ src, alt, className, imageId, onLoad }: ImageCardProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsImageLoading(false);
      onLoad(imageId);
    };
  }, [src, imageId, onLoad]);

  return (
    <Card className={`overflow-hidden bg-primary/10 rounded-xl lg:rounded-3xl border-none ${className}`}>
      <div className='relative w-full h-full'>
        {isImageLoading && <div className='absolute inset-0 bg-gray-200 animate-pulse' aria-hidden='true' />}
        <img
          src={src}
          alt={alt}
          loading='lazy'
          className={`w-full h-full object-cover transition-all duration-700 ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
    </Card>
  );
});

ImageCard.displayName = 'ImageCard';

const Hero = () => {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState<ImageLoadState>({});

  const handleImageLoad = useCallback((imageId: string) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageId]: true,
    }));
  }, []);

  return (
    <section className='min-h-screen w-full flex items-start lg:items-center pt-20 lg:pt-0'>
      <div className='w-full max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center'>
        <div className='space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-[800] leading-[1.5] bg-gradient-to-b from-primary to-accent inline-block text-transparent bg-clip-text'>
            Advancing One Health
            <br />
            for a Healthier
            <br />
            Africa
          </h1>
          <p className='text-lg text-gray-600 max-w-lg mx-auto lg:mx-0'>
            Integrating human, animal, and environmental health through advanced technology and multisectoral
            collaboration for a sustainable future
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <Button onClick={() => navigate('/get-involved')} className='w-full sm:w-auto'>
              Join Our Mission
            </Button>
            <Link
              to='/our-approach'
              className='text-gray-700 hover:text-primary hover:bg-transparent p-0 w-full sm:w-auto flex items-center justify-center group transition-all duration-500'
            >
              <span>Our Approach</span>
              <ArrowRight
                size={20}
                className='ml-1 inline-block  group-hover:translate-x-[5px] transition-all duration-500 ease-in-out'
              />
            </Link>
          </div>
        </div>

        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px]'>
          {/* Image grid structure remains the same */}
          <div className='absolute left-0 bottom-0 w-[32%] flex flex-col gap-2 lg:gap-4'>
            {images.slice(0, 2).map(img => (
              <ImageCard
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={img.height}
                imageId={img.id}
                onLoad={handleImageLoad}
                isLoaded={!!imagesLoaded[img.id]}
              />
            ))}
          </div>

          <div className='absolute left-[34%] top-0 w-[32%] flex flex-col gap-2 lg:gap-4'>
            {images.slice(2, 4).map(img => (
              <ImageCard
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={img.height}
                imageId={img.id}
                onLoad={handleImageLoad}
                isLoaded={!!imagesLoaded[img.id]}
              />
            ))}
          </div>

          <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[32%]'>
            <ImageCard
              src={images[4].src}
              alt={images[4].alt}
              className={images[4].height}
              imageId={images[4].id}
              onLoad={handleImageLoad}
              isLoaded={!!imagesLoaded[images[4].id]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
