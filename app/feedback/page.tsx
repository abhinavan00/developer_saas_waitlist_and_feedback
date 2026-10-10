import Form from "next/form";
import Image from "next/image";
import StatusPill from "@/components/StatusPill";
import FilterBtn from "@/components/FilterBtn";
import FeedbackCard from "@/components/FeedbackCard";
import searchIcon from '@/public/search-icon.svg';
import releaseCandenceIcon from '@/public/release-candence-icon.svg';

export default function Feedback() {
    return (
        <main className={`p-4 md:p-8 lg:px-12`}>
            {/* HEADING */}
            <section className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`}>
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
            </section>
            
            {/* STATUS PILL */}
            <section className={`w-full overflow-x-auto mt-6 flex items-center gap-2 md:mt-8`}>
                <StatusPill status="under-review">Under Review</StatusPill>
                <StatusPill status="planned">Planned</StatusPill>
                <StatusPill status="in-progress">In Progress</StatusPill>
                <StatusPill status="shipped">Shipped</StatusPill>
            </section>
            
            {/* SEARCH AND FILTER */}   
            <section className={`mt-6 lg:flex lg:flex-row-reverse lg:justify-between`}>
                <Form action={'/feedback'}>
                    <label htmlFor="search feedback" className={`relative`}>  
                        <Image 
                            src={searchIcon} 
                            alt="search icon" 
                            className={`w-5 absolute -top-0.5 left-2.5`} 
                        />  
                        <input 
                            type="text"
                            name="feedback"
                            placeholder="Search Feedback..."
                            className={`
                                bg-[#0D0E10] w-full py-4 pl-10 rounded-lg shadow-2xl
                                placeholder:text-[#849584] placeholder:text-lg focus:outline-none
                                cursor-text
                                lg:w-125
                            `}
                        />
                    </label>    
                </Form>
                <div className={`mt-2 flex gap-2`}>
                    <FilterBtn>All</FilterBtn>
                    <FilterBtn>Features</FilterBtn>
                    <FilterBtn>Bugs</FilterBtn>
                    <FilterBtn>Integrations</FilterBtn>
                </div>
            </section>

            {/* FEEDBACK SECTION */}
            <section className={`mt-8 flex flex-col gap-3`}>
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </section>

            {/* RELEASE CANDENCE */}
            <section className={`bg-[#0D0E10] mt-8 py-4 px-3 rounded-lg flex flex-col gap-3`}>
                <div className={`font-mono font-medium flex gap-2`}>
                    <Image src={releaseCandenceIcon} alt="icon" />
                    <p>Bi-weekly Release Cadence</p>
                </div>
                <p className={`text-sm text-[#BACBB9] `}>
                    Roadmap items marked In Progress ship to production on
                    every alternate Thursday at 14:00 UTC. Upvote and join
                    community discussions to help prioritize sprints.
                </p>
                <div className={`font-mono text-sm flex justify-between`}>
                    <p className={`text-[#849584]`}>Sprint 26 closes in 4 days</p>
                    <p className={`text-[#B4FFC0]`}>v1.14.0 target</p>
                </div>
            </section>
        </main>
    )
}