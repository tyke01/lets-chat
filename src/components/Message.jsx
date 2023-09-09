import profile2 from "../img/people/avatar-3.jpg"


const Message = () => {
  return (
    <div className='flex gap-5 owner'>

      <div className='flex items-center flex-col text-gray-500 mb-5 '>

        <img src={profile2} alt="" className='w-10 h-10 rounded-full object-cover'/>
        <span>just now</span>

      </div>


      <div className='max-w-[80%] flex flex-col gap-3 owner-content '>
        <p className='px-3 py-1 bg-white rounded-r-lg rounded-es-lg max-w-max'>hello</p>
        <img src={profile2} alt="" className='w-1/2 my-2'/>
      </div>

    </div>
  )
}

export default Message

