import {BsHouseFill,BsBellFill} from "react-icons/bs"
import {BiLogOut} from "react-icons/bi"
import {FaUser} from "react-icons/fa"
import SidebarLogo from "./SidebarLogo"
import SidebarItem from "./SidebarItem"
import SidebarTweetButton from "./SidebarTweetButton"

const Sidebar = () => {
    const items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Notification",
            href: "/notifications",
            icon: BsBellFill
        },
         {
            label: "profile",
            href: "/users123",
            icon: FaUser
        }

    ]
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6 ">
            <div className="flex flex-col items-end ">
             
                <div className="space-y-2 lg:w-[230px]">
                    
         <SidebarLogo/>
             {items.map((items)=>(
            <SidebarItem 
            key={items.href}
             href={items.href} 
             label={items.label} 
             icon={items.icon}/>
             ))}
             <SidebarItem onClick={()=>{}} icon={BiLogOut} label="Logout"/>
             <SidebarTweetButton/>
                </div>

            </div>
        </div>
    )
}

export default Sidebar