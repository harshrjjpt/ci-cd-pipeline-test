'use client'

import React from 'react'
import clsx from 'clsx'
import { Loader2 } from 'lucide-react'

type ButtonProps = {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link' | 'danger-outline'
  isActive?: boolean
  disabled?: boolean
  showLoader?: boolean
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'disabled' | 'className' | 'children'
>

const sizeClasses = {
  lg: 'h-12 px-6 py-3 text-lg font-semibold rounded-lg gap-3 [&>svg]:size-6 shadow-lg',
  md: 'h-10 px-4 py-2 text-base font-medium rounded-md gap-2 [&>svg]:size-5 shadow-md',
  sm: 'h-8 px-3 py-1.5 text-sm font-medium rounded-md gap-1.5 [&>svg]:size-4 shadow-sm',
  xs: 'h-7 px-2.5 py-1 text-xs font-medium rounded-sm gap-1 [&>svg]:size-3.5 shadow-sm'
}

const variantClasses = {
  primary:
    'text-primary-foreground bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-ring focus:ring-offset-2 active:bg-primary/80 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200',
  secondary:
    'text-secondary-foreground bg-secondary hover:bg-secondary/80 focus:ring-2 focus:ring-ring focus:ring-offset-2 active:bg-secondary/70 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed border border-border shadow-md hover:shadow-lg transition-all duration-200',
  tertiary:
    'text-foreground bg-background hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 active:bg-accent/80 disabled:text-muted-foreground disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-200',
  outline:
    'text-foreground bg-background border border-border hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 active:bg-accent/80 disabled:text-muted-foreground disabled:border-muted disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-200',
  link: 'text-primary bg-transparent hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 active:bg-accent/80 disabled:text-muted-foreground disabled:cursor-not-allowed underline-offset-4 hover:underline transition-all duration-200',
  'danger-outline':
    'text-destructive bg-background border border-destructive hover:bg-destructive hover:text-destructive-foreground focus:ring-2 focus:ring-destructive focus:ring-offset-2 active:bg-destructive/90 disabled:text-muted-foreground disabled:border-muted disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-200'
}

const getLoaderSize = (size: keyof typeof sizeClasses) => {
  const sizes = {
    lg: 'size-6',
    md: 'size-5',
    sm: 'size-4',
    xs: 'size-3.5'
  }
  return sizes[size]
}

export default function Button({
  size = 'md',
  variant = 'primary',
  isActive = false,
  disabled = false,
  showLoader = false,
  children,
  className,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none',
        variantClasses[variant],
        isActive && variant === 'tertiary' && 'bg-accent text-accent-foreground',
        showLoader && 'pointer-events-none',
        className
      )}
      {...props}
    >
      <div className={clsx('flex items-center justify-center', sizeClasses[size], showLoader && 'invisible')}>
        {children}
      </div>
      {showLoader && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <Loader2 className={clsx('animate-spin', getLoaderSize(size))} />
        </div>
      )}
    </button>
  )
}
