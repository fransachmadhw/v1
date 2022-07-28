import React from 'react'
import Image from 'next/image'

const NextWeather = () => {
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
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">Next Weather - An ultimate weather app</h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Made with
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Next.js
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        OpenWeatherMap API
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        JavaScript
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        React
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Tailwind CSS
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        SASS
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
                    <a href='https://nextjs-weather-app-sepia.vercel.app/' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    View live site here
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Code
                </h2>
                <div>
                    <a href='https://github.com/fransachmadhw/nextjs-weather-app-clone' className='hover:underline font-normal text-lg text-neutral-900'>
                    Available on GitHub
                    </a>
                </div>
            </div>
          </div>
          <div className="">
              <div>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>Next weather is an ultimate weather app which you can find the city weather around the world. The app shows you many kind of estimated weather such as daily weather, hourly weather, weekly weather and so forth.</p>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>I did not write any estimated weather based on my mind. That is impossible. Instead, I gathered them from OpenWeatherMap API with a free service. One thing that I love from this app is we are able to use the search box (and city name suggestions will show depend on the keyword you write it down). Hovewer, the disadvantage is not every city in the world can be shown in the suggestion since I did use an external JSON for every city suggestion. Not from OpenWeatherMap API.</p>
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/nextjs-weather-app-clone/main/Images/1.JPG"
                    alt='weather1'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/nextjs-weather-app-clone/main/Images/2.JPG"
                    alt='weather2'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/nextjs-weather-app-clone/main/Images/3.JPG"
                    alt='weather3'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/nextjs-weather-app-clone/main/Images/4.JPG"
                    alt='weather4'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/nextjs-weather-app-clone/main/Images/5.JPG"
                    alt='weather5'
                    layout='fill'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default NextWeather