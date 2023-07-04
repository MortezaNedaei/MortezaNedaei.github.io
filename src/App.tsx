import React, {useCallback} from 'react';
import './App.css';
import AboutSection from "./sections/about";
import {initializeNotification} from "./NotificationService";
import {Fab} from "@mui/material";
import Notifications from '@mui/icons-material/Notifications';

function App() {

    const subscribeCallBack = useCallback(() => {
        initializeNotification()
    }, [])

    return (
            <div className="pageContainer">
                <AboutSection/>
                <div className={'subscribe-container'}>
                    <Fab  color="error" onClick={subscribeCallBack} style={{fontSize: "xxx-large"}}>
                        <Notifications />
                    </Fab>
                </div>
            </div>


    );
}

export default App;
