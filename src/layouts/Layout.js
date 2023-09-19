import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/FooterCard';
import AnalyticsContext from '../AnalyticsContext';
import { sendClickInformation } from '../sendToServer';
import { v4 as uuidv4 } from 'uuid';

const generatedId = uuidv4();
sessionStorage.setItem('userID', generatedId);

const Layout = ({ children }) => {
    const userID = generatedId;
    const initialState = () => {
        const storedState  = sessionStorage.getItem('Clicks')

        return storedState ? JSON.parse(storedState) : [];
    }
    const [clicks, setClicks] = useState(initialState(true));

    useEffect(() => {
        sessionStorage.setItem('Clicks', JSON.stringify(clicks));

        window.onbeforeunload = () => {
            sendClickInformation({ userID: userID, clicks: clicks });
            setClicks([]);
            sessionStorage.removeItem('Clicks');
            sessionStorage.removeItem('userID');
        }

        return () => {
            window.onbeforeunload = null;
        };
    }, [clicks, userID]);

    const handleTrackClick = (e) => {
        const buttonId = e.currentTarget.id;
        const pageURL = window.location.pathname;
        setClicks([...clicks, { buttonId: buttonId, pageURL: pageURL, timestamp: new Date() }])
    }

    return (
        <>
            <AnalyticsContext.Provider value={{ handleTrackClick, userID }}>
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