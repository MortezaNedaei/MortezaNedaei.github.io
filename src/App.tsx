import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useCallback} from 'react';
import './App.css';
import AboutSection from "./sections/about";
import {initializeNotification} from "./NotificationService";
import {faBell} from "@fortawesome/free-solid-svg-icons";

function App() {

    const subscribeCallBack = useCallback(() => {
        initializeNotification()
    }, [])

    return (
        <div className="pageContainer">
            <AboutSection/>

            <div className={'subscribe-container'} onClick={subscribeCallBack}>
                <FontAwesomeIcon icon={faBell}/>
            </div>

        </div>
    );
}

export default App;
