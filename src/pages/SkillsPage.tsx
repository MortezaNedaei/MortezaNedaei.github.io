import React, {FC, memo, PropsWithChildren} from 'react';
import {skills} from "../data/local/resume-data";
import SkillList from "../sections/skills";

const SkillsPage: FC<PropsWithChildren<any>> = memo(() => {
    return (
        <div className='pageContainer'>
            <SkillList skills={skills}/>
        </div>
    );
});

export default SkillsPage;