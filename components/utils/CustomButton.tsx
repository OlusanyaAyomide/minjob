import React from 'react'
import { cn } from '@/lib/utils'
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

export default function CustomButton(buttonProps:IButtonProps) {
  return (
    <button {...buttonProps} className={cn("h-10 px-6 md:px-8 relative hover rounded-md before:absolute before:h-0 before:bottom-0 before:left-0 hover:shadow-md before:w-full  before:bg-j-blue before:transition-all hover:before:h-full before:opacity-100 overflow-hidden before:duration-150  transition-all duration-150 hover:rounded-lg  text-white bg-j-purple",buttonProps.className)}>
      <span className="z-20 relative">{buttonProps.children}</span>
    </button>
  )
}
