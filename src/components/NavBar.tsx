import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className={'NavBarContainer'}>
            <nav id="navbar">
                <NavLink to="/" className={'NavLink-button'}>
                    About
                </NavLink>
                <NavLink to="/presentation" className={'NavLink-button'}>
                    Presentations
                </NavLink>
                <NavLink to="/experience" className={'NavLink-button'}>
                    Experiences
                </NavLink>
                <NavLink to="/education" className={'NavLink-button'}>
                    Education
                </NavLink>
                <NavLink to="/skills" className={'NavLink-button'}>
                    Skills
                </NavLink>
                <NavLink to="/contact" className={'NavLink-button'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}
export default Navbar