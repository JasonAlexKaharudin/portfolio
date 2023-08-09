import React from 'react'

const TechStack = () => {
    return (
        <div className="pt-12 md:pt-18">
            <div className='flex'>
                <h1 className='text-2xl border-b-4 md:text-2xl border-secondaryTextColor font-monospace'>What I've been using</h1>
            </div>

            <div className='flex pt-3 text-sm font-monospace text-secondaryTextColor'>
                <div className='pr-5'>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Django</p>
                </div>

                <div className='pr-5'>
                    <p>Ruby on Rails</p>
                    <p>Tailwindcss</p>
                    <p>TypeScript</p>
                </div>
            </div>
        </div>
    )
}

export default TechStack