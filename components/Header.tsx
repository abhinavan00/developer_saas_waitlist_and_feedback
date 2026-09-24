import Image from 'next/image';
import mobileLogo from '@/public/logo-mobile.svg'; 

export default function Header() {
    return (
        <div 
            className={`
                bg-[#121315]/80 backdrop-blur-xl drop-shadow-sm 
                flex justify-between 
                border-b border-[#3B4B3D]/30 p-4
            `}
        >
            <Image src={mobileLogo} alt='Logo' />
            <button 
                className={`
                    bg-[#10F07A] text-[#006830] text-sm py-2 px-4 
                    rounded-lg drop-shadow-2xl cursor-pointer 
                    hover:bg-[#63FF94] hover:drop-shadow-lg hover:drop-shadow-[#63FF94]/20
                `}
            >
                Feedback Board
            </button>
        </div>
    )
}