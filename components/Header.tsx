import Image from 'next/image';
import mobileLogo from '@/public/logo-mobile.svg'; 

export default function Header() {
    return (
        <div 
            className={`
                bg-[#121315]/80 backdrop-blur-xl drop-shadow-sm drop-shadow-[#000000]/40
                flex justify-between 
                border-b border-[#3B4B3D]/30 p-4
            `}
        >
            <Image className={`md:w-40`} src={mobileLogo} alt='Logo' />
            <button 
                className={`
                    bg-[#10F07A] text-[#006830] text-sm font-mono font-medium 
                    py-2 px-4 rounded-lg drop-shadow-2xl cursor-pointer 
                    hover:bg-[#63FF94] hover:drop-shadow-lg hover:drop-shadow-[#63FF94]/20
                    md:text-lg
                `}
            >
                Feedback Board
            </button>
        </div>
    )
}