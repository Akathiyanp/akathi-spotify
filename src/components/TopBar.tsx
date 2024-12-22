import {ChevronLeft, Menu} from "lucide-react"
//type declaration using interface
interface TopBarProps{
    onMenuClick:()=>void;
}
export default function TopBar({onMenuClick}:TopBarProps){
    return(
        <header className="h-16 bg-[#070707] flex items-center
        justify-between px-4 md:px-8">
            <div className="flex items-center space-x-4" >
               <button className="md:hidden text-white"
               onClick={onMenuClick}>
                <Menu className="h-6 w-6"/>
               </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
            <button className="bg-black rounded-full p-1"></button>
                <ChevronLeft className="h-6 w-6 text-gray-400"/>
            <button className="bg-black rounded-full p-1">
                <ChevronLeft className="h-6 w-6 text-gray-400"/>
            </button>
            </div>
          
           
        </header>
    )
}