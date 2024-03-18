import React from 'react';
import Image from 'next/dist/client/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Photo2 from '../public/assets/profile2.jpg';
import Photo3 from '../public/assets/profile3.jpg';
import Photo4 from '../public/assets/profile4.jpg';

const About = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-full">
      <div className="my-[140px] px-[30px] lg:px-[10vw]">
        <div className="flex mx-auto flex-col gap-6 w-full lg:w-[80%]">
          <div className="uppercase">
            <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
              Who am I
            </h2>
          </div>
          <div>
            <h3 className="text-center text-3xl font-bold lg:text-[3.1vw] leading-none w-[100%] text-neutral-900">
              Hello! My name is Frans and I`m a Front End Developer.
              My main interest is in Software Development. Artificial
              Intelligence is also on my way though!
            </h3>
          </div>
          <div className="">
            <h2 className="font-normal text-center text-xl text-neutral-400">
              Currently, I`m living in Indonesia. I`m a freshgraduate
              of computer science at State University of Malang with
              GPA 3.83 (3.5 years study). Love doing interesting
              things, such as talking to new people, discussing
              amazing technologies, and also interested in
              psychological issue in real life. I also have a{' '}
              <a
                className="font-bold text-neutral-500 hover:text-neutral-900 underline"
                href="https://youtube.com/c/FransGamingLow"
                target="_blank"
              >
                Gaming YouTube
              </a>{' '}
              channel.
            </h2>
          </div>
        </div>
        <div className="my-[100px] mx-auto w-[300px] h-[350px] sm:w-[500px] sm:h-[450px] lg:w-[800px] lg:h-[680px] relative overflow-hidden">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="absolute z-[1] top-0 left-0 w-[200px] h-[150px] sm:w-[300px] sm:h-[220px] lg:w-[500px] lg:h-[400px]"
          >
            <Image
              src={Photo2}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              className="grayscale"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="absolute z-[2] bottom-[100px] lg:bottom-[20%] right-0 w-[180px] h-[150px] sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[400px]"
          >
            <Image
              src={Photo3}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              className="grayscale"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="absolute z-[3] bottom-[20px] sm:bottom-0 lg:bottom-0 left-[15%] w-[170px] h-[120px] sm:w-[250px] sm:h-[180px] lg:w-[350px] lg:h-[235px]"
          >
            <Image
              src={Photo4}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              className="grayscale"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="mb-[260px] flex flex-col md:flex-row gap-20 mx-auto w-[80%]"
        >
          <div className="w-full text-center">
            <div className="uppercase">
              <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
                Technologies I use
              </h2>
            </div>
            <div className="">
              <h2 className="font-bold text-center text-lg tracking-[2px] text-neutral-900">
                HTML <span className="text-neutral-400">-</span> CSS{' '}
                <span className="text-neutral-400">-</span> JavaScript{' '}
                <span className="text-neutral-400">-</span> TypeScript{' '}
                <span className="text-neutral-400">-</span> SASS{' '}
                <span className="text-neutral-400">-</span> Bootstrap{' '}
                <span className="text-neutral-400">-</span> Tailwind
                CSS <span className="text-neutral-400">-</span> React{' '}
                <span className="text-neutral-400">-</span> Laravel{' '}
                <span className="text-neutral-400">-</span> Next.js{' '}
                <span className="text-neutral-400">-</span> React
                Native <span className="text-neutral-400">-</span> C#{' '}
                <span className="text-neutral-400">-</span> Dart{' '}
                <span className="text-neutral-400">-</span> Flutter{' '}
                <span className="text-neutral-400">-</span> Python
              </h2>
            </div>
          </div>
          <div className="w-full text-center">
            <div className="uppercase">
              <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
                Tools I use
              </h2>
            </div>
            <div className="">
              <h2 className="font-bold text-center text-lg tracking-[2px] text-neutral-900">
                Visual Studio Code{' '}
                <span className="text-neutral-400">-</span> Figma{' '}
                <span className="text-neutral-400">-</span> Android
                Studio <span className="text-neutral-400">-</span>{' '}
                GitHub <span className="text-neutral-400">-</span>{' '}
                Premiere Pro{' '}
                <span className="text-neutral-400">-</span> CorelDRAW{' '}
                <span className="text-neutral-400">-</span> Lightroom{' '}
                <span className="text-neutral-400">-</span> MSI
                Afterburner{' '}
                <span className="text-neutral-400">-</span> OBS Studio{' '}
                <span className="text-neutral-400">-</span> Unity
                Engine
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
