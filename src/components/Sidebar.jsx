import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"


const Sidebar = () => {
  return (
    <div className='flex flex-col flex-1  bg-[#3e3c61] relative'>
        <Navbar />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar

