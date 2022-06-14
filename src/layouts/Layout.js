import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='px-16 pb-24 md:px-24 bg-mainBG text-primaryTextColor'>
                {children}
            </main>
        </>
    )
}

export default Layout