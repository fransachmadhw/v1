import React from 'react'
import Image from 'next/image'

const DreadOut2 = () => {
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
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">DreadOut 2 Website Remake</h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Made with
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        HTML
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        CSS
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        SCSS
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Bootstrap 5
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        JavaScript
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Swiper
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        FreezeFrame
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Year
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        2021
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Demo
                </h2>
                <div>
                    <a href='https://dreadout2unofficial.netlify.app/' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    View live site here
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Code
                </h2>
                <div>
                    <a href='https://github.com/fransachmadhw/DreadOut2_Website' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    Available on GitHub
                    </a>
                </div>
            </div>
          </div>
          <div className="">
              <div>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>I am not a fan of horror games. However, there is a popular title in Indonesia especially horror. Yes, it is DreadOut. So in my spare time, I decided to do a small practice related to website coding, by creating my own version of DreadOut 2 website.</p>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>If I am not mistaken, it took a month to finish the whole part. Even, I used help from Bootstrap 5 haha. Apart from that, I was so proud while doing this project. It forced me to learn more about DreadOut 2, gather lots of information from the dev, learn deeply about the gameplay itself and so forth.</p>
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            <div className='w-full h-[200px] lg:h-[91vh] relative'>
                <Image
                    src="https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca"
                    alt='cover'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/1.JPG"
                    alt='d1'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/2.JPG"
                    alt='d2'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/3.JPG"
                    alt='d3'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/4.JPG"
                    alt='d4'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/5.JPG"
                    alt='d5'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/6.JPG"
                    alt='d6'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/7.JPG"
                    alt='d7'
                    layout='fill'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default DreadOut2