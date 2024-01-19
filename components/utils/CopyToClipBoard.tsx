import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify'
import { cn } from '@/lib/utils';
import {IoCopySharp} from "react-icons/io5"
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';



export default function CopyToClipBoard({text,className}:{text:string,className?:string}) {
    const {theme} = useTheme()
    console.log(theme)
  return (
    <>
    <CopyToClipboard text={text} onCopy={()=>{toast(`${text} is copied to clipboard`,
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            theme:theme,
            
        }
    );
      console.log("copied")
  }     
  
  }
    >
        <button className='ml-2'><IoCopySharp className = {cn("text-xl",className)}/></button>   
    </CopyToClipboard>
    <ToastContainer className="fixed top-4 z-20 right-4"/>
    </>

  )
}
