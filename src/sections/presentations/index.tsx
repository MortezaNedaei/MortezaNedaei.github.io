import './index.css';
import React from "react";
import PresentationListItem from "../../components/PresentationListItem";

export interface Presentation {
    id: number;
    type: string;
    value: string;
}

interface PresentationListProps {
    presentations: Presentation[];
}

const PresentationList: React.FC<PresentationListProps> = ({presentations}) => {
    return (
        <div className={'presentations-container'}>
            {presentations.map((presentation, index) => (
                <PresentationListItem presentation={presentation}/>
            ))}
        </div>
    );
};

export default PresentationList;