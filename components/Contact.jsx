import React from 'react'
import Link from 'next/dist/client/link'
import { BsEmojiSmile } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-full'>
        <div className='my-[110px] w-full'>
            <div className='w-full h-[400px] bg-red-400'></div>
            <div className='my-[80px] px-[30px] lg:px-[10vw]'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h2 className='font-normal text-center text-lg tracking-[6px] text-neutral-400'>
                            Get In Touch
                        </h2>
                        <a href='mailto:franswinata6@gmail.com'>
                            <div className='pre flex items-center gap-2 lg:gap-5 relative cursor-pointer'>
                                <h2 className='text-center text-5xl font-bold lg:text-[7vw] whitespace-nowrap leading-none w-[100%] text-neutral-900'>Say Hello!</h2>
                                <h2 className='text-center text-3xl font-bold lg:text-[5vw] whitespace-nowrap leading-none w-[100%] text-neutral-900'><BsEmojiSmile /></h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact