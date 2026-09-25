import Form from 'next/form';
import Image from 'next/image';
import emailIcon from '@/public/email-icon.svg';
import btnArrowIcon from '@/public/btn-arrow-icon.svg';
import windowControlBtnsIcon from '@/public/window-control-btns.svg';
import terminalIcon from '@/public/terminal-icon.svg';
import terminalTickIcon from '@/public/terminal-tick-icon.svg';

export default function Home() {
  return (
    <main className={`font-sans p-4`}>

      {/*----- HERO SECTION ------*/}
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

      {/*------ TERMINAL PREVIEW SECTION ------*/}
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
    </main>
  );
}
