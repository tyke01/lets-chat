import profile1 from "../img/people/avatar-2.jpg";

const Chats = () => {
  return (
    <div className="">
      <div className=' p-2.5 flex items-center gap-5 cursor-pointer text-white hover:bg-[#2f2d52]'>
        <img
          src={profile1}
          alt=""
          className='w-12 h-12 rounded-full object-cover'
        />

        <div>
          <span className='font-semibold text-xl'>Viki</span>
          <p className='text-sm text-gray-400'>Hello</p>
        </div>

      </div>
    </div>
  );
};

export default Chats;
