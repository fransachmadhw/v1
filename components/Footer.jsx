import React from 'react'
import moment from 'moment-timezone'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineMenu, AiFillYoutube } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const a = moment().tz("Asia/Jakarta");
  return (
    <div className='w-full h-[200px] lg:h-[20vh]'>
        <div className='px-[30px] lg:px-[10vw] w-full h-full'>
            <div className='border-t-2 border-neutral-200 flex flex-col md:flex-row gap-1 md:gap-10 text-center md:text-left w-full h-full items-center justify-between'>
                <div className='flex items-center h-full gap-10'>
                    <div>
                        <h2 className='mb-3 uppercase font-normal text-sm tracking-[2px] text-neutral-400'>Location</h2>
                        <h2 className='uppercase font-bold text-base text-neutral-900'>Indonesia</h2>
                    </div>
                    <div>
                        <h2 className='mb-3 uppercase font-normal text-sm tracking-[2px] text-neutral-400'>Local time</h2>
                        <h2 className='uppercase font-bold text-base text-neutral-900'>{a.format("LT")}</h2>
                    </div>

                </div>
                <div className='mb-7 md:mb-0'>
                    <p className={`uppercase font-normal text-sm tracking-[2px] text-neutral-400 mb-3`}>Let&apos;s connect</p>
                    <div className={`flex items-center gap-5 text-xl`}>
                <a
                  href='https://www.linkedin.com/in/fransahw'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className=''>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fransachmadhw'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className=''>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/fransachmadhw'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className=''>
                    <AiOutlineInstagram />
                  </div>
                </a>
                <a
                  href='https://youtube.com/c/FransGamingLow'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className=''>
                    <AiFillYoutube />
                  </div>
                </a>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer