import React, {FC, memo, PropsWithChildren} from 'react';
import {Constants} from "../utils/Constants";
import {GithubIcon, LinkedInIcon, MediumIcon, StackOverflowIcon, TwitterIcon} from "../components/SocialsIcon";

const SocialsSection: FC<PropsWithChildren<any>> = memo(() => {
    return (
        <div className='links'>
            <p>
                <a href="https://linkedin.com/in/morteza-nedaei">
                    <LinkedInIcon className={'socialIconStyle'}/>
                </a>

                <a href="https://github.com/MortezaNedaei">
                    <GithubIcon className={'socialIconStyle'}/>

                </a>
                <a href="https://stackoverflow.com/users/12900836/morteza-nedaei?tab=profile">
                    <StackOverflowIcon className={'socialIconStyle'}/>
                </a>
                <a href="https://twitter.com/MortezaNedaei">
                    <TwitterIcon className={'socialIconStyle'}/>
                </a>
                <a href="https://medium.com/@nedaei1375">
                    <MediumIcon className={'socialIconStyle'}/>
                </a>
            </p>
        </div>
    );
});

SocialsSection.displayName = 'SocialsSection';
export default SocialsSection;