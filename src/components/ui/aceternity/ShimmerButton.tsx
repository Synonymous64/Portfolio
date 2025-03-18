import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
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

export const ShimmerButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        "relative inline-flex h-10 overflow-hidden rounded-md p-[1px]",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 animate-slow-spin bg-gradient-to-r from-primary via-secondary to-primary" />
      <span className={cn(
        "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md px-4 py-1 text-sm font-medium backdrop-blur-3xl",
        variant === "default" ? "bg-primary/80 text-primary-foreground" : "bg-secondary/80 text-secondary-foreground"
      )}>
        {children}
      </span>
    </button>
  );
};

// Add the custom animation and gradient to your global CSS or Tailwind CSS configuration
// filepath: d:\portfolio\creatify-portfolio-vibes\src\styles\globals.css
