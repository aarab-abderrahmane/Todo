"use client";

import { TimelineContent } from "./timeline-animation";
import { Zap } from "lucide-react";
import { useRef, } from "react";

import GitHubButton from './button.jsx'

import { BackgroundLines } from "../components/ui/background-lines";

import {Link, useNavigate} from 'react-router'

function Index() {
  const heroRef = useRef(null);


  const navigate = useNavigate()

  function handleStart(){
      navigate('/todos')

  }

  return (
    
    <div className='relative bg-gray-100 '>
      <BackgroundLines className="absolute z-0 w-full h-full "></BackgroundLines>

      <main
        className=" absolute z-10 min-h-screen  relative overflow-x-hidden pb-10"
        ref={heroRef}
      >
       <svg
          width="681"
          className="absolute -right-12 -top-12 h-96 w-96"
          height="769"
          viewBox="0 0 681 769"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" filter="url(#filter0_f_4494_61989)">
            <ellipse
              cx="573.528"
              cy="197.756"
              rx="151.723"
              ry="190.261"
              transform="rotate(46.3492 573.528 197.756)"
              fill="#0579fd"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4494_61989"
              x="0.546875"
              y="-373.418"
              width="1145.96"
              height="1142.35"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_4494_61989"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className="absolute -left-0 -bottom-0 w-96 h-96"
          width="760"
          height="634"
          viewBox="0 0 760 634"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" filter="url(#filter0_f_4494_61990)">
            <ellipse
              cx="171.338"
              cy="585.349"
              rx="136.065"
              ry="225.854"
              transform="rotate(46.3492 171.338 585.349)"
              fill="#3474ff"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4494_61990"
              x="-417.18"
              y="0.942871"
              width="1177.04"
              height="1168.81"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_4494_61990"
              />
            </filter>
          </defs>
        </svg> 

        <section className="max-w-screen-xl mx-auto ">
          <div className="w-full  overflow-hidden">
          <div className="relative pt-16 grid place-content-center w-full max-w-screen-lg mx-auto   ">
            <figure className="xl:w-full w-[60vw]  md:w-[90%] mx-auto shadow-[0px_-12px_20px_0px_#b9b9b93a] relative z-[1] p-1 backdrop-blur-md bg-white/50 border border-white rounded-lg">
              <TimelineContent animationNum={0} timelineRef={heroRef}>
                <img
                  src="planpulse.vercel.app_1.png"          
                  className="rounded-lg w-full w-[727px] h-[250px] md:h-[429px]"
                  alt="layoutkinanlytics"
                />
              </TimelineContent>
            </figure>

            <TimelineContent
              animationNum={1}
              timelineRef={heroRef}
              style={{ rotate: -4 }}

              className="absolute -left-2 bottom-0 top-[100px] rounded-3xl xl:w-auto lg:w-[60%] w-[70%] overflow-y-hidden bg-green-300"
              as="figure"
            >
              <img
              src={`planpulse.vercel.app_3.png`}             
              className="rounded-lg w-full w-[727px] h-[250px] md:h-[429px]"
                alt="layoutkindash"
              />
            </TimelineContent>

            <TimelineContent
              animationNum={2}
              timelineRef={heroRef}
              className="absolute -right-2 bottom-0 top-[100px]  xl:w-auto w-[60%] "
              as="figure"
              style={{ rotate: 4 }}

            >
              <img
                src={`planpulse.vercel.app_ 2.png`}              
                className="rounded-3xl w-full w-[727px] h-[250px] md:h-[429px]"
                alt="layoutkinddash2"
              />
            </TimelineContent>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '8rem', 
              zIndex: 2,
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(243, 244, 246, 1) 100%)',
            }}
          />

          </div>
          </div>

          <article className="flex flex-col items-center relative z-20 bg-transparent space-y-4 sm:px-0 px-2 mt-6">
            <TimelineContent
              animationNum={1}
              timelineRef={heroRef}
              as="span"
              className="flex gap-2 items-center justify-center text-blue-600"
            >
              <Zap className="fill-blue-600" />
              Organize Your Day
            </TimelineContent>

            <TimelineContent animationNum={2} timelineRef={heroRef}>
              <h1 className="lg:text-5xl sm:text-4xl text-2xl flex flex-col items-center font-semibold">
                Simplify Your Day, <br className="sm:block hidden" /> One Task at a Time
                
              </h1>
            </TimelineContent>

            <TimelineContent animationNum={3} timelineRef={heroRef}> 
              <p className="2xl:w-[40rem] xl:w-[35rem] sm:w-[30rem] w-5/5 mx-auto xl:text-base sm:text-sm text-xs">
                Boost your productivity and focus with a beautifully simple ToDo app.
              </p>

            


            </TimelineContent>

            <TimelineContent animationNum={5} timelineRef={heroRef}>
                <footer className="w-full max-w-5xl text-center  text-gray-600 ">
                <p>Built with ❤️ by aarab abderrahmane</p>
                <p className="">
                  License: <a href="https://github.com/aarab-abderrahmane/Todo?tab=GPL-3.0-1-ov-file" className="text-purple-600 hover:underline">GPL</a>
                </p>
              </footer>
            </TimelineContent>

            <TimelineContent animationNum={4} timelineRef={heroRef}>
                <div className="w-full flex justify-center">

                <div onClick={handleStart} >
                <GitHubButton />
                </div>


                </div>
            </TimelineContent >

          </article>
        </section>
      </main>

    </div>


  );
}

export default Index;
