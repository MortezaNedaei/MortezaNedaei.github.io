import React, {useCallback, useState} from "react";
import {Skill} from "../../sections/skills";
import './index.css'

interface SkillListItemProps {
    skill: Skill;
}

const SkillListItem: React.FC<SkillListItemProps> = ({skill}) => {
    const [showMore, setShowMore] = useState<boolean>(false)

    const onSkillClickCalBack = useCallback(() => {
        setShowMore(!showMore)
    }, [showMore])

    return (
        <div className={'skill-container'} onClick={onSkillClickCalBack}>
            <h3 className={'skill-type'}>{skill.type}</h3>
            {showMore && <p className={'skill-name'}>{skill.skills}</p>}
        </div>
    )
}

export default SkillListItem