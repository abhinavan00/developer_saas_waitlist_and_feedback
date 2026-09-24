import Image from "next/image";
import icon01 from '@/public/icon_01.svg';

export default function FeatureCard() {
    return (
        <div
            className={`
                bg-[#1B1C1E] w-[90%] p-4 rounded-lg font-sans
                relative
            `}
        >   
            <div 
                className={`
                    bg-[#292A2C] p-4 rounded-lg
                    absolute
                `}
            >
                <Image src={icon01} alt='feature icon'/>
            </div>
            <div className={`mt-14`}>
                <p className={`text-2xl font-bold`}>Sub-Millisecond Tracing</p>
                <p className={`text-md text-[#BACBB9]`}>
                    Hardware-accelerated ring buffers stream traces
                    with less than 150µs CPU overhead.
                </p>
            </div>
        </div>
    )
}