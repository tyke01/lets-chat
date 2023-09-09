import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"



const Home = () => {
  return (
    <div className='bg-[#a7bcff] flex items-center justify-center h-screen'>
        <div className='border border-white rounded-xl overflow-hidden h-4/5 w-[65%] flex ]'>
        <Sidebar />
        <Chat />
        </div>
    </div>
  )
}

export default Home

