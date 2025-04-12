import { useState, useCallback, memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { images } from '@/constants';

interface ImageData {
  id: string;
  src: string;
  alt: string;
  height: string;
}

const ImageCard = memo(({ src, alt, className, imageId, onLoad }: ImageCardProps) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '50px',
      }
    );

    const imgElement = document.querySelector(`[data-image-id="${imageId}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [imageId]);

  useEffect(() => {
    if (isIntersecting) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsImageLoading(false);
        onLoad(imageId);
      };
    }
  }, [isIntersecting, src, imageId, onLoad]);

  return (
    <Card className={`overflow-hidden bg-primary/10 rounded-xl lg:rounded-3xl border-none shadow-none ${className}`}>
      <div className="relative w-full h-full">
        {isImageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          data-image-id={imageId}
          src={isIntersecting ? src : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'
            }`}
        />
      </div>
    </Card>
  );
});

ImageCard.displayName = 'ImageCard';

const GlowingSVG = memo(() => (
  <div className='absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none'>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 876 917'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse'
      aria-hidden='true'
    >
      <g filter='url(#filter0_f_74_42543)'>
        <circle cx='528' cy='528' r='128' fill='#A359A0' fillOpacity='0.8'>
          <animate attributeName='opacity' values='0.4;0.8;0.4' dur='3s' repeatCount='indefinite' />
        </circle>
      </g>
      <g filter='url(#filter1_f_74_42543)'>
        <circle cx='528' cy='528' r='64' fill='#D4A7D2'>
          <animate attributeName='opacity' values='0.6;1;0.6' dur='2s' repeatCount='indefinite' />
        </circle>
      </g>
      <defs>
        <filter
          id='filter0_f_74_42543'
          x='0'
          y='0'
          width='1056'
          height='1056'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='200' result='effect1_foregroundBlur_74_42543' />
        </filter>
        <filter
          id='filter1_f_74_42543'
          x='264'
          y='264'
          width='528'
          height='528'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_74_42543' />
        </filter>
      </defs>
    </svg>
  </div>
));

GlowingSVG.displayName = 'GlowingSVG';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleImageLoad = useCallback((imageId: string): void => {
    // If we need to track loading status in the future,
    // we can reimplement the state here
    console.debug(`Image loaded: ${imageId}`);
  }, []);

  return (
    <section className='relative min-h-screen w-full flex items-start lg:items-center pt-[10vh] md:pt-[5vh] lg:pt-0 overflow-hidden px-6 lg:px-0'>
      <GlowingSVG />
      <div className='relative w-full max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center'>
        <div className='space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-[800] leading-[1.5] text-primary'>
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
                className='ml-1 inline-block group-hover:translate-x-[5px] transition-all duration-500 ease-in-out'
              />
            </Link>
          </div>
        </div>

        <div className='relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]'>
          <div className='absolute left-0 bottom-0 w-[32%] flex flex-col gap-[2vh] lg:gap-[3vh]'>
            {images.slice(0, 2).map((img: ImageData) => (
              <ImageCard
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={img.height}
                imageId={img.id}
                onLoad={handleImageLoad}
              />
            ))}
          </div>

          <div className='absolute left-[34%] top-0 w-[32%] flex flex-col gap-[2vh] lg:gap-[3vh]'>
            {images.slice(2, 4).map((img: ImageData) => (
              <ImageCard
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={img.height}
                imageId={img.id}
                onLoad={handleImageLoad}
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
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
