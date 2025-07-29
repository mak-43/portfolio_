import { PhoneIncoming,Monitor,Smartphone,Codepen } from 'lucide-react';
export default function services() {
    return (

      <div className='flex justify-around bg-[#ffffff] text-black  h-[500px] max-w-5xl mx-auto pt-24 p-10'>
        <div className='flex flex-col gap-5 justify-around '>
            <div className='flex gap-4 items-center px-5 py-3 rounded-xl border border-gray-300 shadow-lg bg-[#f8f7f1]'>
                
                <div className='bg-green-800 p-5 text-white rounded-full'><Monitor /></div>
                <div>
                    <h1 className='text-xl font-semibold'>Website Design</h1>
                    <p>76 Projects</p>
                </div>
            </div>
            <div className='flex gap-4 items-center px-5 py-3 rounded-2xl border border-gray-300 shadow-lg bg-[#f8f7f1]'>
                <div className='bg-yellow-400 p-5 text-white rounded-full'><Smartphone/></div>
                
                <div>
                    <h1 className='text-xl font-semibold'>Mobile App Design</h1>
                    <p>63 Projects</p>
                </div>
            </div>
            <div className='flex gap-4 items-center px-5 py-3 border border-gray-300 shadow-lg rounded-xl bg-[#f8f7f1]'>
                <div className='bg-orange-500 p-5 text-white rounded-full'><Codepen/></div>
                
                <div>
                    <h1 className='text-xl font-semibold'>Brand Identity</h1>
                    <p>47 Projects</p>
                </div>
            </div>
            
           

        </div>
        <div className='flex flex-col justify-around '>
            <h1 className='text-5xl font-bold'>What do i help?</h1>
            <p className='w-fit'>Lorem ipsum dolortur autemgsfdgdfgsdfsdafbr    <br /> asdfasdfasfadsfadsfffffasdfasf</p>
            <div className='flex gap-15'>
                <div>
                    <h1 className='text-5xl font-bold'>285+</h1>
                    <p> Project Completed</p>
                </div>
                <div>
                    <h1 className='text-5xl font-bold'>190+</h1>
                    <p> Happy Clients</p>
                </div>

            </div>
        </div>
      </div>

    );
}
