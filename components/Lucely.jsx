import React from 'react'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";

const Lucely = () => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
  return (
    <div className="w-full">
      <div className="w-full px-[30px] lg:px-[5vw] my-[140px] lg:my-[120px]">
        <div className="w-full mb-2">
          <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
            Project
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="w-full lg:w-[70%]">
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">Flutter UI - Lucely Counselling App</h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Made with
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Flutter
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Dart
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Year
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        2023
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Preview
                </h2>
                <div>
                    <a href='https://youtu.be/STo25yzteO0' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    View showcase
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Code
                </h2>
                <div>
                    <a href='https://github.com/fransachmadhw/flutter-ui-lucely' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    Available on GitHub
                    </a>
                </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="">
              <div>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>My first mobile app I have ever made built with Flutter. Lucely is an ultimate counselling app which lets the user choose their desired psychologists or even mentors. Lucely is made for someone who has something like a psychological problem in their life. The users can book online their psychologists, mentors as well as experts online so they can easily contact them by voice call or video call. Apart from that, Lucely will provide its user by inviting them to join a social event and also a super guide from Lucely called LuceGuide.</p>
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/flutter-ui-lucely/main/Lucely-HD-Cover.jpg"
                    alt='lucely'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Lucely;
