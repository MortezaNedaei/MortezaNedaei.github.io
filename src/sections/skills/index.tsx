import './index.css';
import React from "react";
import SkillListItem from "../../components/SkillListItem";

export interface Skill {
    id: number;
    type: string;
    skills: string;
}

interface SkillListProps {
    skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({skills}) => {
    return (
        <div className={'skills-container'}>
            {skills.map((skill, index) => (
                <SkillListItem skill={skill}/>
            ))}
        </div>
    );
};

export default SkillList;