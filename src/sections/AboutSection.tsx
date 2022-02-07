import React, {FC, memo, PropsWithChildren} from 'react';
import {Constants} from "../utils/Constants";
import AboutMeText from "../components/AboutMeText";
import SocialsSection from "./SocialsSection";

const AboutSection: FC<PropsWithChildren<any>> = memo(() => {
    return (
        <>
            <img
                src={Constants.imgProfile}
                className="App-logo"
                alt="logo"/>

            <p className={"title"}>Morteza Nedaei</p>

            <AboutMeText/>

            <p className={"body"}>
                You can find me in the following links
            </p>

            <SocialsSection/>
        </>
    );
});

AboutSection.displayName = 'ResumeSection';
export default AboutSection;