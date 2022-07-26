import React from 'react'
import Image from 'next/dist/client/image'
import Photo from '../public/assets/profile.png'
// import { ID } from 'country-flag-icons/react/3x2'
import Link from 'next/link'
// import { Parallax } from 'react-parallax';

const Main = () => {
  // const insideStyles = {
  //   background: "white",
  //   padding: 20,
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)"
  // };

  return (
    <div className='w-full h-screen lg:border-b-2 border-neutral-900'>
        <div className='flex w-full h-full flex-col lg:flex-row justify-center items-center px-[30px] lg:px-[10vw]'>
          <div className='lg:hidden rounded-full w-[250px] h-[250px] border-2 border-neutral-300 overflow-hidden'>
            <Image
              src={Photo}
              layout='responsive'
              objectFit='cover'
              className='grayscale brightness-[115%] contrast-100'
              alt=''
            />
          </div>
          <div className='flex lg:h-full h-[450px] justify-center w-full items-center lg:items-start flex-col gap-5 bg-transparent z-[100]'>
            <div className='uppercase'><h2 className='font-normal text-center lg:text-left text-lg tracking-[8px] text-neutral-400'>Frans Achmad</h2></div>
            <div><h3 className='text-center lg:text-left text-3xl font-bold lg:text-[7vw] leading-none w-[100%] whitespace-nowrap lg:whitespace-normal text-neutral-900 ml-[-5px]'>Front End Developer</h3></div>
            <div className='lg:w-[60%] w-[100%]'><h2 className='text-lg font-normal leading-[1.5rem] lg:leading-[2vw] text-neutral-400 lg:text-[1.5vw] text-center lg:text-left'>A junior front end developer who experienced in JavaScript, React, Next.js, Tailwind CSS and so forth. Currently, on his 3rd year of study at university.</h2></div>
            <div className='flex gap-3 z-[100]'>
              <Link href='#projects' className=''>
                <button className='p-5 w-[150px] shadow-lg rounded-lg text-neutral-900 font-bold cursor-pointer hover:bg-neutral-900 hover:text-white hover:scale-110 duration-500 active:scale-75'>See my projects</button>
              </Link>
              <Link href='/about'>
                <button className='p-5 w-[150px] shadow-lg rounded-lg text-neutral-900 font-bold cursor-pointer hover:bg-neutral-900 hover:text-white hover:scale-110 duration-500 active:scale-75'>Get to know me</button>
              </Link>
            </div>
          </div>
          <div className='hidden lg:block absolute bottom-0 z-[-1] right-[-25px] w-[55vw] h-[55vw] overflow-hidden duration-500'>
            <Image
              src={Photo}
              // layout='responsive'
              objectFit='cover'
              className='grayscale brightness-[115%] contrast-100'
              alt=''
            />
          </div>
        </div>
        {/* <div className='contoh flex w-full h-full justify-center items-center drop-shadow-xl opacity-[80%] absolute bottom-[30%] lg:bottom-[0%] overflow-hidden text-neutral-50 z-[-1]'>
          <h1 className='uppercase custom-heading text-[100px] sm:text-[150px] whitespace-nowrap font-bold'>
            Frans Achmad
          </h1>
        </div> */}
    </div>
  )
}

export default Main