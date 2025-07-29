import { PhoneIncoming,TreeDeciduous } from 'lucide-react';
export default function HeroSection() {
  return (
    <div className='bg-[#f8f7f1] text-black flex justify-between h-[700px] max-w-5xl mx-auto py-24 px-10  bg-[url(/makbg.png)] bg-size-[500px] bg-bottom bg-no-repeat'>
        
        <div className='flex flex-col justify-between '>
           <h1 className='text-6xl font-bold'> Hey There, <br /> I'm Mak</h1>
            <p className='text-red-500 underline'>letsmailmak@gmail.com</p>
            <div className='flex gap-2'>
                <p className='text-5xl font-bold'>10</p>
                <p>YEARS <br />EXPERIENCE</p>
            </div>
        </div>
        <div className='flex flex-col justify-between '>
            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. .</p>

            <div className='flex flex-col justify-center items-center gap-5'>
                 <TreeDeciduous size={100} className='border rounded-full border-dotted p-2'/>
                <p className='text-center text-xl'>Lorem ipsum dolor <br /> sit amet consectetur, <br /> adipisicing elit. impedit!</p>
            </div>
        </div>
    </div>
  );
}
