import React, {useEffect} from 'react';
import './App.css';
import AboutSection from "./sections/about";
import {initializeNotification} from "./NotificationService";

function App() {

    useEffect(() => {
        initializeNotification()
    }, [])

    return (
        <div className="pageContainer">
            <AboutSection/>
        </div>
    );
}

export default App;
