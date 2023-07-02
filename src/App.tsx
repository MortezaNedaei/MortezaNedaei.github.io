import React, {useEffect} from 'react';
import './App.css';
import AboutSection from "./sections/about";
import {initializeOneSignal} from "./OneSignal";

function App() {

    useEffect(() => {
        initializeOneSignal()
    }, [])

    return (
        <div className="pageContainer">
            <AboutSection/>
        </div>
    );
}

export default App;
