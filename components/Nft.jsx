import React from 'react'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";

const Nft = () => {
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
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">ProNef Mobile NFT Marketplace - A modern UI/UX React Native App</h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Made with
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        React Native
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Expo
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        React
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        JavaScript
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
                    Preview
                </h2>
                <div>
                    <a href='https://expo.dev/@fransachmadhw/nft-marketplace?serviceType=classic&distribution=expo-go' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    View live with Expo Go
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Code
                </h2>
                <div>
                    <a href='https://github.com/fransachmadhw/first-react-native-project' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    Available on GitHub
                    </a>
                </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="">
              <div>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>My first mobile app I have ever made. I built this with React Native technology and powered by Expo. ProNef - Mobile NFT Marketplace 🌍, implements a clean design with the combination of monochrome and colorful content to illustrate professional and artistic style.</p>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>This app is about a simple NFT marketplace. The design itself is made by <a href='https://dribbble.com/alvxyz' className='underline hover:text-neutral-900'>Alvian Teddy</a> on <a href='https://dribbble.com/shots/17067745-ProNef-Mobile-Market-NFT' className='underline hover:text-neutral-900'>Dribbble</a></p>
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://repository-images.githubusercontent.com/522400800/00e2b640-6114-4c14-a1c7-519682f87a85"
                    alt='trivia1'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nft;
