import { PhoneIncoming } from 'lucide-react';
export default function Nav() {
    return (

        <nav className="bg-[#f8f7f1] p-10 flex justify-between items-center max-w-5xl  mx-auto text-black">
            <img className="h-25" src="/logo.webp" alt="Logo " />

            <div className="flex justify-between items-center gap-10">
                <a href="/services">SERVICES</a>
                <a href="/workds">WORKS</a>
                <a href="/notes">NOTES</a>
                <a href="/experience">EXPERIENCE</a>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <div>01613900027</div>
                <PhoneIncoming size={30}/>
            </div>
        </nav>

    );
}
