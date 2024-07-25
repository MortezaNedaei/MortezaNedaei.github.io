import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PresentationPage from "./pages/PresentationPage";
import Navbar from "./components/NavBar";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/presentation" element={<PresentationPage/>}/>
                <Route path="/experience" element={<ExperiencePage/>}/>
                <Route path="/education" element={<EducationPage/>}/>
                <Route path="/skills" element={<SkillsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
            </Routes>
        </Router>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
