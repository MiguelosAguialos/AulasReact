import {BsFillBellFill, BsFillGearFill, BsFillHouseDoorFill ,BsPower, BsSunFill} from 'react-icons/bs' 

function Sidebar(){
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-primary text-secondary shadow-lg">
            <button className='mt-auto'><i><SideBarIcon icon={<BsFillBellFill size="22"/>}/></i></button>
            <button><i><SideBarIcon icon={<BsFillGearFill size="22"/>}/></i></button>
            <button><i><SideBarIcon icon={<BsFillHouseDoorFill size="22"/>}/></i></button>
            <button><i><SideBarIcon icon={<BsPower size="22"/>}/></i></button>
            <button className='mb-auto'><i><SideBarIcon icon={<BsSunFill size="22"/>}/></i></button>
            
        </div>
    )
}
 
function SideBarIcon({icon}){
    return (
        <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-purple-600 rounded-3xl hover:rounded-xl transition-all easy-linear duration-300 cursor-pointer hover:bg-gray-700 shadow-lg">
            {icon}
        </div>
    )
}
export default Sidebar;