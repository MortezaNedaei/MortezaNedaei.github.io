import React, {FC, memo, PropsWithChildren} from 'react';
import {experiences} from "../data/local/resume-data";
import PositionList from "../sections/positions";

const ExperiencePage: FC<PropsWithChildren<{}>> = memo(() => {
    return (
        <div className='pageContainer'>
            <PositionList positions={experiences}/>
        </div>
    );
});

export default ExperiencePage;