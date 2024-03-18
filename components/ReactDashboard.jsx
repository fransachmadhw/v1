import React from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReactDashboard = () => {
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
                React Admin UI - A Beautiful Dashboard User Interface
                Prototype
              </h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Made with
              </h2>
              <div>
                <h2 className="font-normal text-lg text-neutral-900">
                  React 18
                </h2>
                <h2 className="font-normal text-lg text-neutral-900">
                  TypeScript
                </h2>
                <h2 className="font-normal text-lg text-neutral-900">
                  Daisy UI
                </h2>
                <h2 className="font-normal text-lg text-neutral-900">
                  Material UI
                </h2>
                <h2 className="font-normal text-lg text-neutral-900">
                  And many more ...
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Year
              </h2>
              <div>
                <h2 className="font-normal text-lg text-neutral-900">
                  2024
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Preview
              </h2>
              <div>
                <a
                  href="https://react-admin-ui-v1.vercel.app/"
                  className="hover:underline underline lg:no-underline font-normal text-lg text-neutral-900"
                >
                  View live
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Code
              </h2>
              <div>
                <a
                  href="https://github.com/fransachmadhw/react_admin_ui_v1"
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
                React Admin UI is a beautiful and open-source
                Dashboard User Interface Prototype built with
                TypeScript and React based. Surprisingly, this is my
                first time building a User Interface prototype with a
                bit complex components. So, my goal is IT agencies or
                even individual developers could use this prototype to
                brings insight for their future projects.
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
              src="https://repository-images.githubusercontent.com/751172828/aaf02717-3dff-46ff-85b4-ee1859192e04"
              alt="cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactDashboard;
