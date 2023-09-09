import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className='flex grow flex-col'>
        <div className='h-12 flex bg-[#5d5b8d] w-full justify-between items-center p-3 text-gray-400 '>

          <span>Viki</span>

          <div className='flex gap-3'>
            <img src={Cam} alt="" className='h-6 cursor-pointer' />
            <img src={Add} alt="" className='h-6 cursor-pointer' />
            <img src={More} alt="" className='h-6 cursor-pointer' />
          </div>
        
        </div>

        <Messages />

        <Input />
        
    </div>
  )
}

export default Chat

