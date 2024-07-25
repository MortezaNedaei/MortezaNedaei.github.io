import React from "react";
import './index.css'
import {Presentation} from "../../sections/presentations";

interface PresentationListItemProps {
    presentation: Presentation;
}

const PresentationListItem: React.FC<PresentationListItemProps> = ({presentation}) => {
    return (
        <div className={'presentation-container'}>
            <h3 className={'presentation-type'}>{presentation.type}</h3>
            <a className={'presentation-value'} href={presentation.value}>{presentation.value}</a>
        </div>
    )
}

export default PresentationListItem