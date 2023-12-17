const Work = () => {
    return (        
        <section className='flex flex-col gap-5 pt-12 md:flex-row md:gap-16'>
            <h1 id='work' className='text-2xl text-[#a1a1a1] md:text-2xl'>Work</h1>
            <div className='flex flex-col gap-12 pt-1 pr-3 md:pr-5'>
                <p>
                    1+ years of professional development experience.
                    Currently working at Kiteworks as a software engineer
                    in the application team.
                </p>

                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between'>
                        <a href="https://kiteworks.com" className="">
                            <div className='flex flex-col gap-1 '>
                                <h2 className='text-lg '>Software Engineer</h2>
                                <h3 className='text-md text-[#a1a1a1]'>Kiteworks</h3>
                            </div>
                        </a>
                        <p className='text-[#a1a1a1] text-md'>2023-</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-lg'>Software Engineer</h2>
                            <h3 className='text-md text-[#a1a1a1]'>StraitsX (Fazz)</h3>
                        </div>
                        <p className='text-[#a1a1a1] text-md'>2022-2023</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-lg'>Computer Science Bachelor's Degree </h2>
                            <h3 className='text-md text-[#a1a1a1]'>University of California San Diego</h3>
                        </div>
                        <p className='text-[#a1a1a1] text-md'>2021</p>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default Work;