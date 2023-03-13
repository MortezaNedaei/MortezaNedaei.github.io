import React, {FC, memo, PropsWithChildren} from 'react';
import {educations} from "../data/local/resume-data";
import PositionList from "../sections/positions";

const EducationPage: FC<PropsWithChildren<any>> = memo(() => {
    return (
        <div className='pageContainer'>
            <PositionList positions={educations}/>
        </div>
    );
});

export default EducationPage;