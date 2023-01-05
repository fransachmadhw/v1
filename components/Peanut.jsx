import React from 'react'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";

const Peanut = () => {
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
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">Peanut Guy - 3D Platformer Game similar to Fall Guys and Stumble Guys</h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Made with
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Unity Engine
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        C#
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Year
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        2022
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Demo
                </h2>
                <div>
                    <a href='https://fransachmadhw.itch.io/peanutguy' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    View live site here
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Code
                </h2>
                <div>
                    <a href='https://github.com/fransachmadhw/unity-peanut-guy' className='hover:underline font-normal text-lg text-neutral-900'>
                    Available on GitHub
                    </a>
                </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="">
              <div>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>You play as a Peanut in a fantasy world where monsters constantly chase the player. The player needs to reach the finish portal to save his life. Collect the needed keys (5 keys in total), avoid monsters, pass all obstacles, reach the portal and done. Simple as that.</p>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>There are 5 levels which each has different difficulty from easy to hard. Some of assets used gathered from Unity Asset Store for instance Player Model, Monster Model, etc.</p>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>Speaking in which, this game is available to download for free on <a className='underline' href='https://fransachmadhw.itch.io/peanutguy' target={'_blank'}>itch.io</a>. Also, compatible with MacOS, Windows and Linux.</p>
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://repository-images.githubusercontent.com/562682351/881dd94e-ae01-419a-8ec5-9dc2aea6dfe6"
                    alt='peanut1'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://img.itch.zone/aW1hZ2UvMTgyMDE1Ny8xMDcxNDY0NC5qcGc=/original/jx%2Fkzd.jpg"
                    alt='peanut2'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://img.itch.zone/aW1hZ2UvMTgyMDE1Ny8xMDcxNDcyNS5qcGc=/original/i3tdhN.jpg"
                    alt='peanut3'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Peanut