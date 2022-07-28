import React from 'react'
import Image from 'next/image'

const Blogshot = () => {
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
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">Blogshot - A modern blog web-based app</h2>
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
                        GraphQL
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        GraphCMS
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        React
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        JavaScript
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Tailwind CSS
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
                    <a href='https://blogshot.vercel.app/' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    View live site here
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Code
                </h2>
                <div>
                    <a href='https://github.com/fransachmadhw/blogshot-clone' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    Available on GitHub
                    </a>
                </div>
            </div>
          </div>
          <div className="">
              <div>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>Blogshot is a modern blog web-based app which is integrated with GraphCMS, a headless CMS. My lecturer asked us to create a management system app as a final project, instead, I decided to create something more modern and less technical, I chose a blog app. Blogshot can be considered a personal blog publishing which is you can write your blog and publish it to Blogshot via GraphCMS.</p>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>The key point in this project is the technology I used, especially Next.js. This one is so powerful and a bit complicated for sure. All blogs there come from GraphCMS which I already managed it before writing the code.</p>
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            <div className='w-full h-[200px] lg:h-[85vh] relative'>
                <Image
                    src="https://repository-images.githubusercontent.com/512595032/35aa493f-d5ad-4fdd-97e7-5db7a80352ce"
                    alt='cover'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/blogshot-clone/main/Images/1.JPG"
                    alt='blogshot1'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/blogshot-clone/main/Images/2.JPG"
                    alt='blogshot2'
                    layout='fill'
                />
            </div>
            <div className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/blogshot-clone/main/Images/3.JPG"
                    alt='blogshot3'
                    layout='fill'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blogshot