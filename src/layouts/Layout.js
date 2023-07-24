import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/FooterCard';
import AnalyticsContext from '../AnalyticsContext';
import sendClickInformation from '../analytics';

const Layout = ({ children }) => {
    const initialState = () => {
        const storedState = sessionStorage.getItem('clicks');
        return storedState ? JSON.parse(storedState) : [];
    }

    const [clicks, setClicks] = useState(initialState);

    useEffect(() => {
        sessionStorage.setItem('Clicks', JSON.stringify(clicks));

        window.onbeforeunload = () => {
            sendClickInformation(clicks);

            setClicks([]);
            sessionStorage.removeItem('Clicks');
            sessionStorage.removeItem('lastActivityTime');
        }

        return () => {
            window.onbeforeunload = null;
        };
    }, [clicks]);

    const handleTrackClick = (e) => {
        const buttonId = e.currentTarget.id;
        setClicks([...clicks, { buttonId: buttonId, timestamp: new Date() }])
        sessionStorage.setItem('lastActivityTime', Date.now());
    }

    return (
        <>
            <AnalyticsContext.Provider value={{ handleTrackClick }}>
                <Navbar/>
                <main className='flex flex-col max-w-screen-md px-12 pb-24 m-auto md:px-16 bg-mainBG text-primaryTextColor'>
                    {children}
                </main>
                <FooterCard/> 
            </AnalyticsContext.Provider>
        </>
    )
}

export default Layout;