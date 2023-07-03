import React, {FC, memo, PropsWithChildren} from 'react';
import {Constants} from "../../utils/Constants";
import About from "../../components/About";
import SocialsSection from "../SocialsSection";
import './index.css'
import {initializeNotification} from "../../NotificationService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faBell} from "@fortawesome/free-solid-svg-icons";

const AboutSection: FC<PropsWithChildren<any>> = memo(() => {
    return (
        <>
            <img
                src={Constants.imgProfile}
                className="App-logo"
                alt="logo"/>

            <h3 className={"fullName"}>{Constants.fullName}</h3>

            <About/>

            <p className={"description"}>
                You can find me on the following links :
            </p>

            <SocialsSection/>
        </>
    );
});

export default AboutSection;
