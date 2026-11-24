import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-trump-gold text-star-black hover:bg-trump-gold-dark hover:text-white shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]",
        destructive:
          "bg-trump-red text-white hover:bg-trump-red-dark shadow-[0_0_20px_rgba(220,20,60,0.4)] hover:shadow-[0_0_40px_rgba(220,20,60,0.6)]",
        outline:
          "border border-trump-gold bg-transparent text-trump-gold hover:bg-trump-gold hover:text-star-black",
        ghost:
          "hover:bg-white/10 hover:text-trump-gold",
        gold:
          "bg-trump-gold text-star-black hover:bg-white hover:text-star-black shadow-[0_0_25px_rgba(255,215,0,0.5)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 px-8 text-lg",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
