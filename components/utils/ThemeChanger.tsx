import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { SunMedium,Moon } from 'lucide-react'
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";


export default function ThemeChanger() {
  const {setTheme,theme} = useTheme()
  return (
    <Button
      variant={"ghost"} 
      size={"sm"}
      className=''
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    > 
      <IoMoon className="rotate-0  text-j-purple text-[22px]  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaSun  className="absolute  text-j-purple text-[22px] scale-0 dark:scale-100  rotate-90 transition-all dark:rotate-0 " />
    </Button>

  )
}
