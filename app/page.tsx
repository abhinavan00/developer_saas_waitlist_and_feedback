import Form from 'next/form';
import Image from 'next/image';
import emailIcon from '@/public/email-icon.svg';
import btnArrowIcon from '@/public/btn-arrow-icon.svg';
import windowControlBtnsIcon from '@/public/window-control-btns.svg';
import terminalIcon from '@/public/terminal-icon.svg';
import terminalTickIcon from '@/public/terminal-tick-icon.svg';
import FeatureCard from '@/components/FeatureCard';
import featureIcon01 from '@/public/icon_01.svg'; 
import featureIcon02 from '@/public/icon_02.svg'; 
import featureIcon03 from '@/public/icon_03.svg'; 
import cummunityDrivenIcon from '@/public/cummunity-driven-icon.svg';
import exploreFeedbackBtnArrow from '@/public/explore-feedback-btn-arrow.svg';

export default function Home() {
  return (
    <main className={`font-sans p-4`}>

      {/*----- SECTION:- HERO ------*/}
      <section className={`flex flex-col items-center`}>

        {/*----- LIVE STATUS PILL ------*/}
        <p 
          className={`
            font-mono text-[#B4FFC0] text-sm bg-[#292A2C] w-110 py-1 px-2 mt-8 mb-6 rounded-3xl
            flex items-center justify-center gap-2
          `}
        >
          <span className={`inline-block w-2.5 h-2.5 bg-[#10F07A] rounded-4xl`}></span>
          DevPulse v0.8 Preview • Public Waitlist Open
        </p>

        {/*---- HEADING & SUBHEADING -----*/}
        <h1 className={`text-5xl font-bold text-center max-w-200`}>
          The developer
          observability suite built for 
          <span className={`text-[#10F07A]`}> rapid engineering.</span>
        </h1>
        <p className={`text-[#BACBB9] text-center mt-4 max-w-155`}>
          Unified distributed tracing, real-time edge
          telemetry, and automated incident triage inside
          a singular fast terminal control plane.
        </p>

        {/*----- WAITLIST FORM -----*/}
        <Form action={'/'} className={`mt-6 w-full max-w-125`}>
            <label htmlFor='email' className={`relative`}>
              <Image 
                src={emailIcon} alt='email icon' 
                className={`pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3`} />
              <input 
                type='email'
                name='email'
                placeholder='developer@company.com'
                className={`
                  bg-[#0D0E10] w-full shadow-inner shadow-[#000000]/5 py-3 px-4 pl-13 rounded-lg
                  cursor-text
                  placeholder:text-[#849584] focus:outline-none focus:bg-[#1B1C1E]
                `}
              />
            </label>
            <button 
              type='submit'
              className={`
                bg-[#10F07A] w-full text-[#003918] font-semibold rounded-lg py-3 mt-2 cursor-pointer
                flex items-center justify-center gap-2
                hover:bg-[#63FF94] hover:drop-shadow-lg hover:drop-shadow-[#63FF94]/20 
              `}
            >
              Join Waitlist 
              <span><Image src={btnArrowIcon} alt='button arrow icon'/></span>
            </button>
        </Form>

        {/*---- SOCIAL PROOF ----*/}
        <p className={`font-mono font-medium text-sm text-[#BACBB9] mt-3.5`}>
          Over <span className={`text-white`}>3,400+</span> developers waiting
        </p>
      </section>

      {/*------ SECTION:- TERMINAL PREVIEW  ------*/}
      <section 
        className={`
          font-mono mt-10 bg-[#0D0E10] rounded-lg drop-shadow-xl drop-shadow-[#000000]/10 max-w-220
          mx-auto
        `}
      >

        {/*----- TERMINAL HEADER BAR -----*/}
        <div className={`bg-[#292A2C] flex justify-between px-3.5 py-2.5 rounded-t-lg w-full`}>
          <Image src={windowControlBtnsIcon} alt='Window control buttons icon'/>
          <div className={`flex gap-2`}>
            <Image className={`w-3.5`} src={terminalIcon} alt='Terminal Icon'/>
            <p className={`text-sm text-[#BACBB9]`}>bash — devpulse-node-01</p>
          </div>
          <p className={`text-[#B4FFC0] text-sm flex items-center gap-1.5`}>
            <span className={`w-2 h-2 bg-[#B4FFC0] rounded-4xl`}></span>0.14ms
          </p>
        </div>

        {/*----- TERMINAL BODY -----*/}
        <div className={`p-4 my-3 flex flex-col gap-4`}>
          <p className={`font-medium`}><span className={`text-[#B4FFC0] font-bold mr-2`}>$</span>npx devpulse init --preset=production</p>
          <p className={`flex gap-2 text-[#BACBB9]`}>
            <Image src={terminalTickIcon} alt='tick icon' className={`w-3`} />
            Detected 4 microservices <span className={`text-[#00E473]`}>(Node, Go, Bun)</span>
          </p>
          <p className={`flex gap-2 text-[#BACBB9]`}>
            <Image src={terminalTickIcon} alt='tick icon' className={`w-3`} />
            Zero-overhead eBPF tracing hook active
          </p>
          <div className={` text-[#BACBB9] relative`}>
            <Image src={terminalTickIcon} alt='tick icon' className={`w-3 absolute top-1`} />
            <p className={`pl-5`}>
              Streaming live telemetry to local control
              plane at <span className={`underline text-[#4CD7F6]`}>http://localhost:4040</span>
            </p>    
          </div>
          <p className={`text-[#849584] flex items-center`}>
            <span className={`text-[#10F07A] text-sm font-bold mr-2`}>˃</span>
            Listening for edge events
            <span className={`w-2 h-4 bg-[#10F07A] inline-block ml-2`}></span>
          </p>
        </div>
      </section>

      {/*------ SECTION:- FEATURES ------*/}
      <section className={`mt-16 flex flex-col items-center gap-2`}>
        <p className={`font-mono text-sm text-[#10F07A]`}>ZERO OVERHEAD</p>
        <p className={`font-bold text-3xl text-center md:text-4xl`}>Everything you need to ship fearlessly</p>
        <div className={`flex flex-col gap-4 mt-4 md:flex-row`}>
          <FeatureCard 
            icon={featureIcon01}
            heading='Sub-Millisecond Tracing'
            subheading='Hardware-accelerated ring buffers stream traces with less than 150µs CPU overhead.' 
          />
          <FeatureCard 
            icon={featureIcon02}
            heading='CLI-First Workflows'
            subheading='One-liner instrumentation for Bun, Node, Go, Rust, and Python without invasive SDK code.'
          />
          <FeatureCard 
            icon={featureIcon03}
            heading='Deterministic Root Cause'
            subheading='Correlates diffs, panic logs, and runtime metrics directly to offending PR lines.'
          />
        </div>
      </section>

        {/*----- SECTION:- FEEDBACK BOARD TEASER BANNER -----*/}
        <section className={`bg-[#292A2C] p-4 mt-8 rounded-lg flex flex-col gap-2 md:flex-row md:items-center md:justify-between`}>
          <div className={`flex flex-col gap-2 max-w-125`}>
            <p className={`font-mono text-sm text-[#B4FFC0] flex items-center gap-2`}>
              <Image src={cummunityDrivenIcon} alt='cummunity driven icon' className={`w-5`}/>
              COMMUNITY DRIVEN
            </p>
            <p className={`text-2xl font-semibold`}>Shape the DevPulse roadmap</p>
            <p className={`text-[#BACBB9]`}>
              Vote on upcoming eBPF telemetry hooks, AI
              triage, and runtime integrations.
            </p>
          </div>
          <button 
            className={`
              font-mono font-medium text-[#B4FFC0] bg-[#0D0E10] w-full py-4 rounded-lg
              flex items-center justify-center gap-2 cursor-pointer hover:gap-3 hover:shadow-lg
              hover:shadow-[#0D0E10]/30 md:w-90
            `}
          >
            Explore Feedback Board
            <Image src={exploreFeedbackBtnArrow} alt='button arrow icon' className={``} />
          </button>
        </section>
    </main>
  );
}
