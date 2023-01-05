import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div id='projects' className='w-full px-[30px] lg:px-[10vw] mt-[20px] lg:mt-[80px]'>
      <div data-aos="fade-up" data-aos-anchor-placement="center-center" className='flex flex-col gap-3 my-5'>
        <div className='uppercase'>
          <h2 className='font-normal text-center lg:text-left text-lg tracking-[8px] text-neutral-400'>
            Selected Projects
          </h2>
        </div>
        <div className='uppercase'>
          <h3 className='text-center lg:text-left text-3xl lg:text-[40px] leading-none w-[100%] font-bold lg:whitespace-normal text-neutral-900 ml-[-5px]'>
            These are my favourite projects
          </h3>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='my-10 grid md:grid-cols-2 grid-cols-1 gap-4'>
        <Link href="/project/peanut">
          <div className='h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer'>
            <div className='absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300'>
              2022
            </div>
            <div className='absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0'></div>
            <Image
              src="https://repository-images.githubusercontent.com/562682351/881dd94e-ae01-419a-8ec5-9dc2aea6dfe6"
              alt='peanut'
              layout='fill'
              className='group-hover:grayscale-0 grayscale duration-300'
              objectFit='cover'
            />
            <div className='absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden'>
              <h2 className='font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center'>Peanut Guy</h2>
              <h2 className='font-medium text-center text-neutral-600 leading-[20px] text-base'>3D Platformer Game similar to Fall Guys and Stumble Guys.</h2>
              <div className='flex gap-2'>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>Unity Engine</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>C#</div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/project/nft">
          <div className='h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer'>
            <div className='absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300'>
              2022
            </div>
            <div className='absolute w-full h-full bg-neutral-300 opacity-80 z-[1] duration-300 group-hover:opacity-0'></div>
            <Image
              src="https://repository-images.githubusercontent.com/522400800/00e2b640-6114-4c14-a1c7-519682f87a85"
              alt='nft'
              layout='fill'
              className='group-hover:grayscale-0 grayscale duration-300'
              objectFit='cover'
            />
            <div className='absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden'>
              <h2 className='font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center'>Mobile NFT Marketplace</h2>
              <h2 className='font-medium text-center text-neutral-600 leading-[20px] text-base'>A modern UI/UX NFT Mobile Marketplace built with React Native.</h2>
              <div className='flex gap-2'>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>React Native</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>Expo</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>JavaScript</div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/project/blogshot">
          <div className='h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer'>
            <div className='absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300'>
              2022
            </div>
            <div className='absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0'></div>
            <Image
              src="https://repository-images.githubusercontent.com/512595032/35aa493f-d5ad-4fdd-97e7-5db7a80352ce"
              alt='blogshot'
              layout='fill'
              className='group-hover:grayscale-0 grayscale duration-300'
              objectFit='cover'
            />
            <div className='absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden'>
              <h2 className='font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center'>Blogshot</h2>
              <h2 className='font-medium text-center text-neutral-600 leading-[20px] text-base'>A modern blog web-based app which is integrated with GraphCMS, a headless CMS.</h2>
              <div className='flex gap-2'>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>Next.js</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>GraphQL</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>JavaScript</div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/project/dreadout2">
          <div className='h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer'>
            <div className='absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300'>
              2021
            </div>
            <div className='absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0'></div>
            <Image
              src="https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca"
              alt='dreadout2'
              layout='fill'
              className='group-hover:grayscale-0 grayscale duration-300'
              objectFit='cover'
            />
            <div className='absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden'>
              <h2 className='font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center'>DreadOut 2 Website (Remake)</h2>
              <h2 className='font-medium text-center text-neutral-600 leading-[20px] text-base'>Remake of Official DreadOut 2 Website.</h2>
              <div className='flex gap-2'>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>HTML</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>CSS</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>SCSS</div>
                <div className='bg-neutral-900 text-xs text-white px-2 py-1 '>JavaScript</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='mt-[80px] w-full text-center'>
        <h2 className='text-2xl font-bold text-neutral-900 my-3'>Looking for other projects?</h2>
        <Link href="/archive">
          <button className='p-3 border-2 border-neutral-400 hover:-translate-y-2 duration-300 text-neutral-500'>View Archive</button>
        </Link>
      </div>
    </div>
  )
}

export default Projects