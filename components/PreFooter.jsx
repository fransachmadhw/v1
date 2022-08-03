import React from 'react'
import Link from 'next/dist/client/link'
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight } from 'react-icons/bs'

const PreFooter = () => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='w-full'>
        <div className='w-full my-[70px] h-[50vh]'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='font-normal text-center text-lg tracking-[6px] text-neutral-400'>
                        Need a friend?
                    </h2>
                    <Link href='/contact'>
                        <div className='pre flex items-center gap-2 lg:gap-5 relative cursor-pointer'>
                            <h2 className='text-center text-5xl font-bold lg:text-[7vw] whitespace-nowrap leading-none w-[100%] text-neutral-900'>Let`s talk</h2>
                            <h2 className='text-center text-3xl font-bold lg:text-[5vw] whitespace-nowrap leading-none w-[100%] text-neutral-900 translate-y-1 lg:translate-y-2'><BsArrowRight /></h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreFooter