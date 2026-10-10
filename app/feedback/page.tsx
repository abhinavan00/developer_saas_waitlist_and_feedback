import StatusPill from "@/components/StatusPill";
import FeedbackCard from "@/components/FeedbackCard";

export default function Feedback() {
    return (
        <main className={`p-4`}>
            <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`}>
                <div className={`flex flex-col gap-2`}>
                    <div className={`font-mono text-xs text-[#B4FFC0] flex items-center gap-1.5`}>
                        <div className={`w-2.5 h-2.5 bg-[#10F07A] rounded-full`}></div>
                        COMMUNITY POWERED
                    </div>
                    <p className={`text-3xl font-semibold md:text-5xl`}>Public Feedback & Roadmap</p>
                    <p className={`text-[#BACBB9]`}>
                        Vote on feature requests, report bugs, and track what
                        we're building next.
                    </p>
                </div>
                <button 
                    className={`
                        bg-[#10F07A] text-[#003918] font-semibold w-full py-3 rounded-lg cursor-pointer
                        drop-shadow-xl hover:bg-[#3DEC90]
                        flex justify-center items-center gap-2
                        md:w-52
                    `}
                >
                    <span className={`text-2xl font-normal`}>+</span> Submit Feedback
                </button>
            </div>
        </main>
    )
}