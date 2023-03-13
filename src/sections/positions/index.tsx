import './index.css';
import React from "react";
import PositionListItem from "../../components/PositionListItem";

export interface Position {
    id: number;
    company: string;
    logo: string;
    pageLink: string;
    position: string;
    dates: string;
    location: string;
    description: string;
}

interface PositionListProps {
    positions: Position[];
}

const PositionList: React.FC<PositionListProps> = ({positions}) => {
    return (
        <div className={'position-list-container'}>
            {positions.map((experience, index) => (
                <PositionListItem experience={experience}/>
            ))}
        </div>
    );
};

export default PositionList;