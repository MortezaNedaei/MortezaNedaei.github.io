import React, {FC, memo, PropsWithChildren, useEffect, useState} from 'react';
import {Constants} from "../../utils/Constants";
import About from "../../components/About";
import SocialsSection from "../SocialsSection";
import './index.css'
import axios from "axios";

const AboutSection: FC<PropsWithChildren<any>> = memo(() => {

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        axios.get(Constants.API_URL).then(response => {
            if (response.status === 200) {
                const showAboutContent = response.data.showAboutContent
                setShowContent(showAboutContent)
            }
        })
    }, [])

    return (
        <>
            {showContent && <img
                src={Constants.imgProfile}
                className="App-logo"
                alt="logo"/>
            }

            <h3 className={"fullName"}>{Constants.fullName}</h3>

            {showContent && <About/>}

            <p className={"description"}>
                You can find me on the following links :
            </p>

            <SocialsSection/>
        </>
    );
});

export default AboutSection;
