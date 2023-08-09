import React from 'react'

const Bio = () => {
    return (
        <section className='pt-10'>
            <div className='flex'>
                <h1 className='text-2xl border-b-4 md:text-2xl border-secondaryTextColor font-monospace'>What I've Been Using</h1>
            </div>

            <div className='pt-3 text-md max-w-7xl'>
                <div className='flex pt-3 text-sm font-monospace '>
                    <div className='pr-5'>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Django</p>
                    </div>

                    <div className='pr-5'>
                        <p>Ruby on Rails</p>
                        <p>Python</p>
                        <p>TypeScript</p>
                    </div>
                </div>
            </div>

            <div className='pt-7'>

            </div>
        </section>
    )
}

export default Bio