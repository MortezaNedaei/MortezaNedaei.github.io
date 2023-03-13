import React, {FC, memo, PropsWithChildren} from "react";
import './index.css'

const About: FC = memo((props: PropsWithChildren<{}>) => {
    return (
        <p {...props} className={"about-text"}>
            I’m a Software Engineer with at least 6 years of working experience in big
            cross-functional teams with more than 10 members, Playing a key role in determining technology and
            infrastructure roadmap and one of the main code reviewers among every 3 senior engineers of every
            team, Helped at least half of the teams to proceed their works in a productive way. Transferring
            knowledge and ideas to the team and also other teams in order to scale the teams, Skilled in Android
            Development using Kotlin and Java, and have Experienced in iOS, React Native, and Flutter
            Development with a Master's degree in AI Engineering
        </p>
    )
})

export default About