import React from 'react'
import {GrClose} from "react-icons/gr"
export default function CloseButton() {
  return (
        <button className='h-9 w-9 group hover:border-border  grid place-content-center rounded-full'>
            <GrClose className = "text-shade group-hover:text-main text-xl"/>
        </button>
  )
}
