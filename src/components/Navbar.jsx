import { signOut } from 'firebase/auth'
import profile1 from '../img/people/avatar-1.jpg'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-[#2f2d52] h-12 p-2 w-full text-[#ddddf7]'>
      <span className='font-bold lg:right-0'>Lets Chat</span>

        <div className='flex items-center gap-2'>
            <img src={profile1} alt="" className='bg-[#ddddf7] h-8 w-8 rounded-full object-cover' />
            <span>Viki</span>
            <button onClick={() => signOut(auth)} className='text-gray-300 text-xs bg-[#5d5b8d] px-2 w-fit h-fit rounded-sm py-1 hover:opacity-90 '>Logout</button>

        </div>
    </div>
  )
} 

export default Navbar


// md:absolute md:bottom-2 md:left-2  sm:absolute sm:bottom-2 sm:left-2 lg:top-0
