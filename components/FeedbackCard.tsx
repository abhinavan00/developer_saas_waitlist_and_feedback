import Image from 'next/image';
import commentIcon from '@/public/comment-icon.svg';

export default function FeedbackCard({type, status}:{
    type?:string
    status?:string
}) {
    return (
        <div className={`bg-[#1B1C1E] py-4 pl-24 pr-10 relative flex flex-col gap-3 rounded-lg`}>
            <div className={`bg-[#1F2022] font-mono font-semibold w-16 h-30 absolute left-3 flex flex-col justify-center items-center rounded-md shadow-2xl`}>
                <div className={`text-[#BACBB9]`}>˄</div>
                312
            </div>
            <div className={`font-mono text-sm flex gap-2`}>
                <span className={`bg-[#343537] text-[#4CD7F6] px-2.5`}>Feature</span>
                <span className={`bg-[#B4FFC0]/10 text-[#10F07A] px-2.5`}>In Progress</span>
            </div>
            <div className={`flex flex-col gap-2`}>
                <p className={`font-semibold text-xl lg:text-2xl`}>Native OpenTelemetry Collector exporter</p>
                <p className={`text-sm text-[#BACBB9] line-clamp-2 lg:text-base`}>
                    Provide a zero-overhead OTLP gRPC endpoint straight from DevPulse daemon 
                    instances without sidecar proxy memory footprint.
                </p>
            </div>
            <div className={`font-mono text-sm flex gap-2 lg:text-base`}>
                karl_sys
                <span className={`text-[#849584]`}>· 2h ago ·</span>
                <span className={`flex gap-1`}>
                    <Image src={commentIcon} alt='comment icon' />
                    0
                </span>
            </div>
        </div>
    )
}