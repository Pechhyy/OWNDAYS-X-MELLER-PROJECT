import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-sans font-bold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:bg-[#d9d9d9] disabled:text-neutral-600 aria-disabled:pointer-events-none aria-disabled:bg-[#d9d9d9] aria-disabled:text-neutral-600",
  {
    variants: {
      variant: {
        // ONLINE STORE: orange -> brown on hover
        brand: "bg-brand text-white hover:bg-[#8a4220]",
        // ALL ITEMS: black -> gray on hover
        dark: "bg-black text-white hover:bg-neutral-600",
      },
      size: {
        default: "h-11 px-8 text-xs",
        lg: "h-14 px-10 text-sm lg:h-[70px]",
      },
    },
    defaultVariants: { variant: "brand", size: "default" },
  },
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button, buttonVariants }
