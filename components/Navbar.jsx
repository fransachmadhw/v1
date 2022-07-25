import React from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineMenu, AiFillYoutube } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = React.useState(false)
  const [dekstopMenu, setDesktopMenu] = React.useState(false)

  React.useEffect(() => {
    const handleNav2 = () => {
      if (window.scrollY >= 90) {
        setDesktopMenu(true);
      } else {
        setDesktopMenu(false);
      }
    };
    window.addEventListener('scroll', handleNav2);
  }, []);

  const handleNav = () => {
    setNav(prev => !prev)
  }

  return (
    <div className='absolute top-0 w-full h-[100px] z-[200]'>
        <div className='flex justify-between items-center w-full h-full px-[20px] lg:px-[60px] font-semibold'>
          <div>
            {/* <Link href='/'>
              <div className='w-[150px] h-full flex flex-col cursor-pointer gap-0'>
                <h3 className='font-bold text-xl text-neutral-900 leading-none'>Frans Achmad</h3>
                <h3 className='font-medium text-[10px] tracking-[4.7px] text-neutral-900 uppercase'>Front End Dev</h3>
              </div>
            </Link> */}
          </div>
          <div className='list-1'>
            <div onClick={handleNav} className='flex items-center gap-3 cursor-pointer bg-transparent text-neutral-900 hover:scale-110 duration-500 active:scale-75'>
              <span>MENU</span>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
          <div className={`${nav ? 'right-0 rounded-none opacity-100' : 'right-[-100%] md:right-[-60%] rounded-l-[500px] opacity-0'} fixed z-[2] top-0 w-[100%] h-screen flex flex-col justify-center bg-neutral-900 text-neutral-200 sm:w-[60%] md:w-[60%] lg:w-[40%] px-7 sm:px-[40px] md:px-[80px] lg:px-[100px] py-10 ease-in-out duration-1000`}>
            <div>
              <div className='flex justify-between items-center'>
                <div className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[200px] opacity-0'} hidden lg:block w-[95px] lg:w-[105px] h-[30px] overflow-hidden flex items-center cursor-pointer duration-1000 ease-in-out delay-[.5s]`}>
                  <h3 className='whitespace-nowrap ml-0 hover:ml-[-105px] delay-150 duration-500'>Frans Achmad  Front End Dev</h3>
                </div>
                <div className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[200px] opacity-0'} lg:hidden w-[95px] lg:w-[105px] h-[30px] overflow-visible flex items-center cursor-pointer duration-1000 ease-in-out delay-[.5s]`}>
                  <h3 className='whitespace-nowrap ml-0 delay-150 duration-500 hover:text-[#FF0000]'>Frans Achmad | Front End Dev</h3>
                </div>
                <div onClick={handleNav} className='absolute top-[20px] md:top-[40px] right-[20px] md:right-[40px] rounded-full p-6 cursor-pointer bg-neutral-200 text-neutral-900  hover:scale-110 duration-500 active:scale-75'>
                  <AiOutlineClose size={20} />
                </div>
              </div>
              <div className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[200px] opacity-0'} border-b border-neutral-500 duration-1000 ease-in-out delay-[.5s]`}>
                <p className='text-sm font-semibold text-neutral-500 py-4'>Let&apos;s build something incredible together</p>
              </div>
            </div>
            <div className='my-10 list-2'>
              <ul className='flex flex-col gap-4 text-neutral-50'>
                <Link href='/'>
                  <li className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'} text-5xl font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[.8s]`}>Home</li>
                </Link>
                <Link href='/#projects'>
                  <li className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'} text-5xl font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[.9s]`}>Work</li>
                </Link>
                <Link href='/about'>
                  <li className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'} text-5xl font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[1s]`}>About</li>
                </Link>
                <Link href='/#contact'>
                  <li className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'} text-5xl font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[1.1s]`}>Contact</li>
                </Link>
              </ul>
            </div>
            <div>
              <p className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'} text-sm font-semibold text-neutral-500 py-4 duration-1000 ease-in-out delay-[1.6s]`}>Let&apos;s connect</p>
              <div className={`${nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'} flex items-center gap-10 text-xl duration-1000 ease-in-out delay-[1.7s]`}>
                <a
                  href='https://www.linkedin.com/in/fransahw'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full hover:p-3 py-3 cursor-pointer hover:scale-110 hover:bg-neutral-500 hover:text-neutral-900 duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fransachmadhw'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full hover:p-3 cursor-pointer hover:scale-110 hover:bg-neutral-500 hover:text-neutral-900 duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/fransachmadhw'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full hover:p-3 cursor-pointer hover:scale-110 hover:bg-neutral-500 hover:text-neutral-900 duration-300'>
                    <AiOutlineInstagram />
                  </div>
                </a>
                <a
                  href='https://youtube.com/c/FransGamingLow'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full hover:p-3 cursor-pointer hover:scale-110 hover:bg-neutral-500 hover:text-neutral-900 duration-300'>
                    <AiFillYoutube />
                  </div>
                </a>
              </div>
            </div>
          </div>

        <div onClick={handleNav} className={`${dekstopMenu ? 'opacity-100' : 'opacity-0 z-[-2]'} fixed ${nav ? 'z-[-2]' : 'z-[-1]'} top-[20px] md:top-[40px] right-[20px] md:right-[40px] rounded-full p-6 cursor-pointer bg-neutral-900 text-neutral-50 hover:scale-110 duration-500 active:scale-75`}>
          <AiOutlineMenu size={20} />
        </div>


    </div>
  )
}

export default Navbar