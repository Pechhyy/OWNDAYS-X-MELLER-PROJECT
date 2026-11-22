import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root
const SheetTitle = SheetPrimitive.Title
const SheetDescription = SheetPrimitive.Description
const SheetClose = SheetPrimitive.Close

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="sheet-overlay fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
      <SheetPrimitive.Content
        className={cn(
          // mobile: floating rounded card, desktop: right-side panel 616px
          "sheet-content",
          "fixed inset-x-4 bottom-4 top-4 z-50 overflow-y-auto rounded-[10px] bg-black text-white",
          "lg:inset-x-auto lg:inset-y-0 lg:right-0 lg:w-[616px] lg:rounded-none",
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          aria-label="Close"
          className="absolute right-5 top-5 z-10 text-brand focus-visible:outline-2 focus-visible:outline-brand"
        >
          <XIcon className="size-7 lg:size-9" strokeWidth={1.5} />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}

export { Sheet, SheetContent, SheetTitle, SheetDescription, SheetClose }
