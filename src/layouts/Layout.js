import React from 'react'
import Navbar from '../components/Navbar';
import FooterCard from '../components/FooterCard';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='flex flex-col max-w-screen-md px-16 pb-24 m-auto bg-mainBG text-primaryTextColor'>
                {children}
            </main>
            <FooterCard/>
        </>
    )
}

export default Layout