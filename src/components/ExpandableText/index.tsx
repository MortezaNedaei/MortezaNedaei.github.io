import React, {FC, memo, useCallback, useState} from 'react';
import './index.css'

export interface ExpandableTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string;
}

const MAX_TEXT_WORDS = 200

const ExpandableText: FC<ExpandableTextProps> = memo(({text, ...props}) => {
    const [showMore, setShowMore] = useState<boolean>(false)

    const onButtonClickCalBack = useCallback(() => {
        setShowMore(!showMore)
    }, [showMore])

    return (
        <p className={'expandable-text'} {...props}>
            {showMore ? text : `${text.substring(0, MAX_TEXT_WORDS)}`}
            <button className="expandable-button" onClick={onButtonClickCalBack}>
                {showMore ? "Show less" : "Show more"}
            </button>
        </p>
    )
})

export default ExpandableText