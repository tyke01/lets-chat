import Img from "../img/img.png"
import Attach from "../img/attach.png"


const Input = () => {
  return (
    <div className='h-12 bg-white flex items-center justify-between px-3'>
      <input type="text" placeholder="Type something... " className='w-[80%] text-[2f2d52] text-lg placeholder:text-gray-400 outline-none' />

      <div className='flex items-center gap-3'>
        <img src={Attach} alt="" />
        <input type="file" style={{display: "none"}} id="file"/>

        <label htmlFor="file">
          <img src={Img} alt="" className='h-6 cursor-pointer'/>
        </label>

        <button className='px-3 py-1 text-white bg-[#8da4f1] rounded-sm'>Send</button>
        
      </div>

    </div>
  )
}

export default Input

