import {Position} from "../../sections/positions";
import React from "react";
import ExpandableText from "../ExpandableText";
import './index.css'

interface PositionListItemProps {
    experience: Position;
}

const PositionListItem: React.FC<PositionListItemProps> = ({experience}) => {
    return (
        <div key={experience.id} className="positions-container">
            <div className={'content-container'}>
                <a className="company-logo-container" href={experience.pageLink}>
                    <img
                        src={experience.logo}
                        className="company-logo"
                        alt="logo"
                    />
                </a>
                <div className={'position-header-container'}>
                    <div className="position-row">
                        <h4 className="position-title">{experience.position}</h4>
                        <p className="dates">{experience.dates}</p>
                    </div>
                    <div className="company-row">
                        <a href={experience.pageLink}>{experience.company}</a>
                        <p className="location">{experience.location}</p>
                    </div>
                    <ExpandableText text={experience.description}/>
                </div>

            </div>
        </div>
    )
}

export default PositionListItem