import Image from "next/image";
import type { StaticImageData } from 'next/image';

export default function FeatureCard({icon, heading, subheading}:{
  icon:string | StaticImageData, 
  heading:string, 
  subheading:string  
}) {
    return (
        <div
            className={`
                bg-[#1B1C1E] p-4 rounded-lg font-sans
                relative
            `}
        >   
            <div 
                className={`
                    bg-[#292A2C] p-4 rounded-lg
                    absolute
                `}
            >
                <Image src={icon} alt='feature icon'/>
            </div>
            <div className={`mt-14`}>
                <p className={`text-2xl font-bold`}>{heading}</p>
                <p className={`text-md text-[#BACBB9]`}>{subheading}</p>
            </div>
        </div>
    )
}