import React from 'react';
import './App.css';
import {Constants} from "./utils/Constants";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={Constants.imgProfile}
                    className="App-logo"
                    alt="logo"/>
                <p className={"paragraph"}>
                    My name is Morteza Nedaei. This is my personal site. I am a Software Engineer.
                    You can find me in the following links
                </p>

                <div className='links'>
                    <a
                        className="linkStyle"
                        href="https://linkedin.com/in/morteza-nedaei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="linkStyle"
                        href="https://github.com/mortezanedaei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <a
                        className="linkStyle"
                        href="https://twitter.com/MortezaNedaei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                </div>

            </header>
        </div>
    );
}

export default App;
