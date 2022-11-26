import React from 'react'
import Image from 'next/dist/client/image'
import AOS from "aos";
import "aos/dist/aos.css";
import Photo1 from '../public/assets/profile2.jpg'
import Photo2 from '../public/assets/profile3.jpg'
import Photo3 from '../public/assets/profile4.jpg'

const About = () => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
  return (
    <div className='w-full'>
        <div className='my-[140px] px-[30px] lg:px-[10vw]'>
            <div className='flex mx-auto flex-col gap-6 w-full lg:w-[80%]'>
                <div className='uppercase'><h2 className='font-normal text-center text-lg tracking-[8px] text-neutral-400'>Who am I</h2></div>
                <div><h3 className='text-center text-3xl font-bold lg:text-[3.1vw] leading-none w-[100%] text-neutral-900'>Hello! My name is Frans and I`m a Front End Developer. My main interest is in Web Development, however I also love Mobile App Development especially with React Native since I have much knowledge in JavaScript (Not much actually, but I quite understand with the fundamentals).</h3></div>
                <div className=''><h2 className='font-normal text-center text-xl text-neutral-400'>Currently, I`m living in Indonesia. And now, pursuing my study at university (My major is Computer Science). And I hope what I`ve learnt in Web Development can make me as a Professional Front End Developer and also leads me to Mobile Development easier than from zero knowledge. Recently, I have a bit interest in 3D Game Development. That`s weird but I found that Game Development is challenging. My hobbies are playing computer video games, singing, and editing a video. I also have a <a className='font-bold text-neutral-500 hover:text-neutral-900 underline' href='https://youtube.com/c/FransGamingLow' target='_blank'>Gaming YouTube</a> channel.</h2></div>
            </div>
            <div className='my-[100px] mx-auto w-[300px] h-[350px] sm:w-[500px] sm:h-[450px] lg:w-[800px] lg:h-[680px] relative overflow-hidden'>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='absolute z-[1] top-0 left-0 w-[200px] h-[150px] sm:w-[300px] sm:h-[220px] lg:w-[500px] lg:h-[400px]'>
                    <Image
                        src={Photo1}
                        placeholder='blur'
                        objectFit='cover'
                        layout='fill'
                        className='grayscale'
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='absolute z-[2] bottom-[100px] lg:bottom-[20%] right-0 w-[180px] h-[150px] sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[400px]'>
                    <Image
                        src={Photo2}
                        placeholder='blur'
                        objectFit='cover'
                        layout='fill'
                        className='grayscale'
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='absolute z-[3] bottom-[20px] sm:bottom-0 lg:bottom-0 left-[15%] w-[170px] h-[120px] sm:w-[250px] sm:h-[180px] lg:w-[350px] lg:h-[235px]'>
                    <Image
                        src={Photo3}
                        placeholder='blur'
                        objectFit='cover'
                        layout='fill'
                        className='grayscale'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='mb-[260px] flex flex-col md:flex-row gap-20 mx-auto w-[80%]'>
                <div className='w-full text-center'>
                    <div className='uppercase'><h2 className='font-normal text-center text-lg tracking-[8px] text-neutral-400'>Technologies I use</h2></div>
                    <div className=''><h2 className='font-bold text-center text-lg tracking-[2px] text-neutral-900'>HTML <span className='text-neutral-400'>-</span> CSS <span className='text-neutral-400'>-</span> JavaScript <span className='text-neutral-400'>-</span> SASS <span className='text-neutral-400'>-</span> Bootstrap <span className='text-neutral-400'>-</span> Tailwind CSS <span className='text-neutral-400'>-</span> React <span className='text-neutral-400'>-</span> Laravel <span className='text-neutral-400'>-</span> Next.js <span className='text-neutral-400'>-</span> React Native</h2></div>
                </div>
                <div className='w-full text-center'>
                    <div className='uppercase'><h2 className='font-normal text-center text-lg tracking-[8px] text-neutral-400'>Tools I use</h2></div>
                    <div className=''><h2 className='font-bold text-center text-lg tracking-[2px] text-neutral-900'>Visual Studio Code <span className='text-neutral-400'>-</span> Figma <span className='text-neutral-400'>-</span> Android Studio <span className='text-neutral-400'>-</span> GitHub <span className='text-neutral-400'>-</span> Premiere Pro <span className='text-neutral-400'>-</span> CorelDRAW <span className='text-neutral-400'>-</span> Lightroom <span className='text-neutral-400'>-</span> MSI Afterburner <span className='text-neutral-400'>-</span> OBS Studio</h2></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
