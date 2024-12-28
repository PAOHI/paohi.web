import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import Spinner from '../Spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:bg-primary/10 disabled:text-muted',
  {
    variants: {
      variant: {
        default:
          'bg-primary hover:bg-primary/95 text-white text-center py-4 rounded-full shadow-md flex items-center justify-center',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full',
        outline: 'border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground rounded-full',
        secondary: 'bg-mutedForeground text-primary hover:bg-mutedForeground rounded-full',
        ghost: 'hover:bg-accent/10 hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        transparent: 'bg-transparent text-white hover:bg-white/20',
      },
      size: {
        default: 'h-10 px-6 py-5',
        sm: 'h-9 rounded-full px-3',
        lg: 'h-11 rounded-full px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, disabled, loadingText = 'Loading...', ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={isLoading || disabled}
      >
        {isLoading ? (
          <>
            <Spinner className='mr-2 h-4 w-4 animate-spin' />
            {loadingText}
          </>
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
