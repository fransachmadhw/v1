import React from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Trivia = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-full">
      <div className="w-full px-[30px] lg:px-[5vw] my-[140px] lg:my-[120px]">
        <div className="w-full mb-2">
          <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
            Project
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="w-full lg:w-[70%]">
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">
                Flutter UI - Real Estate Apartment Renting App
              </h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Made with
              </h2>
              <div>
                <h2 className="font-normal text-lg text-neutral-900">
                  Flutter
                </h2>
                <h2 className="font-normal text-lg text-neutral-900">
                  Dart
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Year
              </h2>
              <div>
                <h2 className="font-normal text-lg text-neutral-900">
                  2023
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Preview
              </h2>
              <div>
                <a
                  href="https://youtu.be/1zTvOrPcpqk"
                  className="hover:underline underline lg:no-underline font-normal text-lg text-neutral-900"
                >
                  View showcase
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Code
              </h2>
              <div>
                <a
                  href="https://github.com/fransachmadhw/flutter-ui-realestate"
                  className="hover:underline underline lg:no-underline font-normal text-lg text-neutral-900"
                >
                  Available on GitHub
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className=""
          >
            <div>
              <p className="text-neutral-400 text-xl lg:text-2xl mb-8">
                Showing my second exploration with Flutter Framework,
                I built a modern UI mobile app powered with GetX state
                management. There are lots of things which are new to
                me such as a custom navigation bar, carousel slider,
                ability to zoom in and zoom out an image, tab bar, and
                so forth.
              </p>
            </div>
          </div>
        </div>
        <div className="my-[120px] flex flex-col w-full gap-8 lg:gap-14">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-full h-[200px] lg:h-[90vh] relative"
          >
            <Image
              src="https://user-images.githubusercontent.com/74099030/231788448-1ff3b1c0-0f2c-42a1-90d4-2f5eed0171b0.jpg"
              alt="realestate"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
