import Form from 'next/form';
import Image from 'next/image';
import emailIcon from '@/public/email-icon.svg';
import btnArrowIcon from '@/public/btn-arrow-icon.svg';

export default function Home() {
  return (
    <main className={`font-sans p-4`}>

      {/*----- HERO SECTION ------*/}
      <section className={`flex flex-col items-center`}>
        {/*----- LIVE STATUS PILL ------*/}
        <p 
          className={`
            font-mono text-[#B4FFC0] text-sm bg-[#292A2C] w-110 p-2 mt-8 mb-6 rounded-3xl
            flex items-center justify-center gap-2
          `}
        >
          <span className={`w-2.5 h-2.5 bg-[#10F07A] rounded-4xl`}></span>
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
        <Form action={'/'} className={`my-6 w-full max-w-125`}>
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
      </section>
    </main>
  );
}
