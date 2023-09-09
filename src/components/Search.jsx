import profile1 from '../img/people/avatar-1.jpg'


const Search = () => {
  return (
    <div className='border-b border-gray-500 '>

      <div>
      <input type="text" placeholder='Find a user'  className='bg-transparent text-white outline-none placeholder:text-gray-300 px-3'/>
      </div>

      <div className=' p-2.5 flex items-center gap-5 cursor-pointer text-white hover:bg-[#2f2d52]'>

        <img src={profile1} alt="" className='w-12 h-12 rounded-full object-cover'/>

        <div className=''>
         <span>Viki</span>
        </div>

      </div>
  

    </div>
  )
}

export default Search