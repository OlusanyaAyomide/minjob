import { BiSolidDashboard } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa6";
import { SiClockify } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import { RiFolderOpenFill } from "react-icons/ri";
import { PiNotebookFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";



export const sideLinks =[
    {
        name:"Dashboard",
        Icon:BiSolidDashboard,
        link:"/"
    },
    {
        name:"Market Place",
        Icon:SiHomeassistantcommunitystore,
        link:"/market"
    },
    {
        name:"Giggs",
        Icon:FaBriefcase,
        link:"/gigg"
    },
    {
        name:"Processing",
        Icon:SiClockify,
        link:"processing"
    },
    {
        name:"Community",
        Icon:BiLogoTelegram,
        link:"/community"
    },
    {
        name:"Portfolio",
        Icon:RiFolderOpenFill,
        link:"/portfolio"
    },
    {
        name:"Courses",
        Icon:PiNotebookFill,
        link:"/courses"
    },
    {
        name:"Setings",
        Icon:IoSettingsOutline,
        link:"/settings"
    }
]


export const mobileLinks=[
    {
        name:"Dashboard",
        Icon:BiSolidDashboard,
        link:"/"
    },
    {
        name:"Market Place",
        Icon:SiHomeassistantcommunitystore,
        link:"/market"
    },
    {
        name:"Giggs",
        Icon:FaBriefcase,
        link:"/gigg"
    },
    {
        name:"Courses",
        Icon:PiNotebookFill,
        link:"/courses"
    },
]

export const mockTransactions=[
    {
        date:"21 oct 2023",
        category:"Transfer",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    },
    {
        date:"21 oct 2023",
        category:"withdrawal",
        Amount:"₦4000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Failed",
        currency:"NGN",
        channel:"TUssd",
    },
    {
        date:"18 oct 2023",
        category:"Deposit",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    },
    {
        date:"18 oct 2023",
        category:"Deposit",
        Amount:"₦2,000",
        transactionRef:"#z1gsnks86e6kfo8",
        status:"Success",
        currency:"NGN",
        channel:"Card",
    }
]