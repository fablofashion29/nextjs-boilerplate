// components/ui/textarea.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Base styles
        'flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none',
        
        // Field sizing - auto-grows with content
        'field-sizing-content',
        
        // Placeholder and text styles
        'placeholder:text-muted-foreground',
        
        // Dark mode
        'dark:bg-input/30',
        
        // Focus state
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        
        // Invalid/error state
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40',
        
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
        
        // Responsive text size
        'md:text-sm',
        
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }