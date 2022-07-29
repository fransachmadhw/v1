import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const Archive = () => {
    const [archives, setArchives] = React.useState()

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/fransachmadhw/all-of-my-projects/main/db.json")
        .then(res => res.json())
        .then(data => setArchives(data))
    }, [])

    console.log(archives)

    const archiveElement = archives && archives.map((archive, index) => (
        <div key={index} className='px-0 md:px-5 hover:shadow-lg py-3 grid grid-cols-5 hover:cursor-default md:grid-cols-6 text-xl'>
            <div className='col-span-1 flex items-center'>{archive.year}</div>
            <div className='col-span-3 px-2 md:col-span-2 flex items-center'>{archive.title}</div>
            <div className='col-span-2 px-2 hidden md:flex text-neutral-400 text-base items-center'>{archive.technology}</div>
            <div className='col-span-1 px-2 flex w-full h-full items-center text-2xl gap-2'>
                {
                    archive.live
                    &&
                    <a target="_blank" href={archive.live}>
                        <FiExternalLink />
                    </a>
                }
                {
                    archive.github
                    &&
                    <a target="_blank" href={archive.github}>
                        <AiFillGithub />
                    </a>
                }
            </div>
        </div>
    ))

    return (
        <div className='w-full'>
            <div className='px-[30px] lg:px-[10vw] my-[100px] lg:my-[120px]'>
                <div className='flex flex-col gap-2 px-0 md:px-5'>
                    <h2 className='text-7xl text-neutral-900 font-bold'>Archive</h2>
                    <h2 className='font-normal lg:text-left text-lg tracking-[8px] text-neutral-400'>
                        All of my projects listed here
                    </h2>
                </div>
                <div className='my-[50px] flex flex-col w-full'>
                    <div className='px-0 md:px-5 py-2 grid grid-cols-5 md:grid-cols-6'>
                        <div className='col-span-1 text-xl text-neutral-400 font-bold'>Year</div>
                        <div className='col-span-3 px-2 md:col-span-2 text-xl text-neutral-400 font-bold'>Title</div>
                        <div className='col-span-2 px-2 hidden md:block text-xl text-neutral-400 font-bold'>Built with</div>
                        <div className='col-span-1 px-2 text-xl text-neutral-400 font-bold'>Link</div>
                    </div>
                    {/* <div className='px-0 md:px-5 hover:shadow-lg py-3 grid grid-cols-5 md:grid-cols-6 text-xl'>
                        <div className='col-span-1 flex items-center'>2022</div>
                        <div className='col-span-3 md:col-span-2 flex items-center'>Blogshot</div>
                        <div className='col-span-2 hidden md:flex items-center'>Next.js Hygraph React</div>
                        <div className='col-span-1 flex w-full h-full items-center text-2xl gap-2'>
                            <a target="_blank" href="">
                                <FiExternalLink />
                            </a>
                            <a target="_blank" href="">
                                <AiFillGithub />
                            </a>
                        </div>
                    </div> */}
                    {archiveElement && archiveElement}
                </div>
            </div>
        </div>
    )
}

export default Archive