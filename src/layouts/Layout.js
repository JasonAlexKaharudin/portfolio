import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/FooterCard';
import AnalyticsContext from '../AnalyticsContext';
import { sendClickInformation, sendPageTimeInformation } from '../analytics';

const Layout = ({ children }) => {
    const initialState = () => {
        const storedState  = sessionStorage.getItem('Clicks')

        return storedState ? JSON.parse(storedState) : [];
    }
    
    const [clicks, setClicks] = useState(initialState(true));
    const startTime = Date.now();
    
    useEffect(() => {
        sessionStorage.setItem('Clicks', JSON.stringify(clicks));

        window.onbeforeunload = () => {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000;
            sendPageTimeInformation({ pageURL: "(base) /", duration: duration })

            sendClickInformation(clicks);
            setClicks([]);
            sessionStorage.removeItem('Clicks');
            sessionStorage.removeItem('viewDuration');
        }

        return () => {
            window.onbeforeunload = null;
        };
    }, [clicks, startTime]);

    const handleTrackClick = (e) => {
        const buttonId = e.currentTarget.id;
        setClicks([...clicks, { buttonId: buttonId, timestamp: new Date() }])
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