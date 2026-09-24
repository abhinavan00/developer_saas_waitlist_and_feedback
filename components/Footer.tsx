import Image from 'next/image';
import mobileLogo from '@/public/logo-mobile.svg';

export default function Footer() {
    return (
        <div
            className={`
                bg-[#0D0E10] py-6 px-4   
            `}
        >
            <div className={`flex justify-between`}>
                <Image src={mobileLogo} alt='logo' />
                <p 
                className={`
                    font-mono text-[#BACBB9] text-xs bg-[#1B1C1E] px-4 rounded-2xl
                    flex justify-center items-center gap-2
                `}
                >
                    <span><div className='w-3 h-3 bg-[#10F07A] rounded-4xl'></div></span> 
                    All systems operational
                </p>
            </div> 
            <p className={`font-mono text-[#BACBB9] text-xs text-center mt-8`}>
                © 2026 DevPulse Inc. All rights reserved.
            </p>   
        </div>
    )
}