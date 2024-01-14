import { create } from "zustand";




export interface IUseHomeLayOut{
    isExpanded:boolean
    setIsExpanded:(val:boolean)=>void
    
}


export const useHomeLayout =create<IUseHomeLayOut>((set)=>({
    isExpanded:true,
    setIsExpanded:(val)=>{
        set((state)=>({
            isExpanded:val 
        }))    
    },


}))