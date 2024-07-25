import React, {FC, memo, PropsWithChildren} from 'react';
import PresentationList from "../sections/presentations";
import {presentations} from "../data/local/resume-data";

const PresentationPage: FC<PropsWithChildren<any>> = memo(() => {
    return (
        <div className='pageContainer'>
            <PresentationList presentations={presentations}/>
        </div>
    );
});

export default PresentationPage;