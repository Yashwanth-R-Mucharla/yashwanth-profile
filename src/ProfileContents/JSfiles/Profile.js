import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSfiles/ReactTabs.css';
import { BsEnvelope,BsTelephone } from "react-icons/bs";
import yashwanthImage from '../Images/yashwanth.jpg';
import skills from '../Images/Skills.jpg';
import educationImg from '../Images/education.jpg';
import achievementsImg from '../Images/achievements.jpg';
import education from '../JsonFiles/education.json';
import '../CSSfiles/Tables.css';
//import personalprofile from '../JsonFiles/personalprofile.json';

const Profile=()=>{
    const [toggle, setToggle] = useState(1);
    const toggleTab=(index)=>{
        setToggle(index);
    }
    const DisplayData = education.map(
        (info)=>{
            return(
                <tr>
                    <td className="td">{info.Qualification}</td>
                    <td className="td">{info.Institution}</td>
                    <td className="td">{info.cgpa}</td>
                    <td className="td">{info.Years}</td>
                </tr>
            )
        }
    )
    return(
        <div className="Home">
            <div className="page-header">
                <div className="profile-header">
                    Mucharla Yashwanth Reddy
                </div>
                <div className="contacts">
                        <BsEnvelope className="envelope"/>
                            &ensp;: <a href="mailto:yashwanthreddy790@gmail.com">yashwanthreddy790@gmail.com</a>
                            <br/>
                        <BsTelephone className="envelope"/>
                        &ensp;: +91 7702445591
                    
                </div>
            </div>
            <div className="tabs-container">
                <div className={toggle === 1?"tab active-tab":"tab"} onClick={()=>{toggleTab(1)}}>
                    Career Objective</div>
                <div className={toggle === 2?"tab active-tab":"tab"} onClick={()=>{toggleTab(2)}}>
                    Skills & Experience</div>
                <div className={toggle === 3?"tab active-tab":"tab"} onClick={()=>{toggleTab(3)}}>
                    Education</div>
                <div className={toggle === 4?"tab active-tab":"tab"} onClick={()=>{toggleTab(4)}}>
                    Achievements & Projects</div>
                <div className={toggle === 5?"tab active-tab":"tab"} onClick={()=>{toggleTab(5)}}>
                    Personal Profile</div>
            </div>
            <div className="Contents">
                <div className={toggle === 1?"Content active-Content":"Content"}>
                    <div className="career-obj">
                        <div className="career-objective">
                        <p className="content-heading">Career Objective:</p>
                        <p className="content-body"> &ensp;&emsp;&emsp;To secure a challenging application development job where I can put my skills at work for creating client focused, visually appealing, user friendly applications.</p>
                        <p className="content-body">&ensp;&emsp;&emsp; Dedicated to update my knowledge continuously by following industry trends, Consistently motivated by my passion to build innovative solutions for modern problems.</p>
                        </div>
                        <div className="image">
                            <img className="yashImage" src={yashwanthImage} alt="yashwanthImage"></img>
                        </div>
                    </div>
                </div>
                <div className={toggle === 2?"Content active-Content":"Content"}>
                    <div className="skills">
                        <div className="career-objective-skills"> 
                            <p className="content-heading">Skills & Experience:</p>
                            <div className="skills-experience-flex-block">
                                <div className="skills-block">
                                <p className="skills-only">Skills:</p>
                                <p>
                                    <ul className="ul">
                                        <li>Web Application Designing:
                                            <ul className="sub-ul">
                                                <li>SharePoint SPFx (React Framework)</li>
                                                <li>React JS</li>
                                                <li>Java Script</li>
                                                <li>HTML, CSS, Bootstrap</li>
                                            </ul>
                                        </li>
                                        <li>Platforms:
                                            <ul className="sub-ul">
                                                <li>SharePoint</li>
                                                <li>Power Automate</li>
                                            </ul>
                                        </li>
                                        <li>Programming Languages:
                                            <ul className="sub-ul">
                                                <li>C Programming</li>
                                                <li>Java</li>
                                                <li>Python</li>
                                                <li>MS SQL</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                </div>
                                <div className="experience-block">
                                    <p className="experience-only">Experience:</p>
                                    <p>
                                        <ul className="ul">
                                            <li>Associate Application Developer:&ensp;2 Years
                                                <ul className="sub-ul">
                                                    <li><b>Company :</b> Accenture Pvt. Sol.</li>
                                                    <li><b>Platform</b>
                                                        <ul>
                                                            <li>Microsoft SharePoint</li>
                                                            <li>Microsoft Power Automate</li>
                                                            <li>Dot Net</li>
                                                        </ul>
                                                    </li>
                                                    <li><b>Job Role</b>
                                                        <ul>
                                                            <li>SharePoint admin and Web-Application Developer in both on-premis and Online environment.</li>
                                                            <li>Creating automated workflows associated with SharePoint applications.</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="image-skills">
                            <img className="skillsimg"src={skills} alt="Skills"/>
                        </div>
                    </div>
                </div>
                <div className={toggle === 3?"Content active-Content":"Content"}>
                    <div className="education">
                        <div className="career-objective-education">
                            <p className="content-heading-education">Education:</p>
                            <div className="education-block">
                            <table className="tables">
                                <thead>
                                    <tr>
                                        <th className="th">Qualification</th>
                                        <th className="th">Institution</th>
                                        <th className="th">CGPA/ Percentage</th>
                                        <th className="th">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DisplayData}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="image-education">
                            <img className="eduImg" src={educationImg} alt="educationImg"/>
                        </div>
                    </div>
                </div>
                <div className={toggle === 4?"Content active-Content":"Content"}>
                    <div className="achievements">
                        <div className="career-objective">
                            <p className="content-heading">Achievements & Projects:</p>
                            <div className="achievements-block">
                                <p className="acheivements-block-heading">Achievements:</p>
                                <ul className="ul">
                                    <li className="sub-ul">Served as <b>Literary Club President</b> during academic year 2018-2019.</li>
                                </ul>
                                <p className="acheivements-block-heading">Certifications:</p>
                                <ul className="ul">
                                    <li className="sub-ul">Microsoft Certifications:
                                        <ul>
                                            <li className="sub-ul">MS-900</li>
                                            <li className="sub-ul">SC-900</li>
                                            <li className="sub-ul">PL-900</li>
                                        </ul>
                                    </li>
                                    <li className="sub-ul">Dell EMC Academic Associate: Data Science and Big Data Analytics.</li>
                                    <li className="sub-ul">Programming for Everybody: Python</li>
                                </ul>
                                <p className="acheivements-block-heading">Projects:</p>
                                <ul>
                                    <li className="sub-ul">
                                        Aging aware Reliable Multiplier Design with Adaptive Hold Logic.
                                    </li>
                                    <li className="sub-ul">8 CHannel Quiz Buzzer.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image">
                            <img className="achievementsImg" src={achievementsImg} alt="achievementsImg"/>
                        </div>
                    </div>
                </div>
                <div className={toggle === 5?"Content active-Content":"Content"}>
                    <div className="personal">
                        <div className="career-objective">
                            <p className="content-heading">Personal Profile:</p>
                            <div className="personal-block">
                                <table className="personal-profile-table">
                                    <tr>
                                        <td>First Name</td>
                                        <td>&emsp;&emsp;:</td>
                                        <td>&emsp;&emsp;Yashwanth Reddy</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td>&emsp;&emsp;:</td>
                                        <td>&emsp;&emsp;Mucharla</td>
                                    </tr>
                                    <tr>
                                        <td>Age</td>
                                        <td>&emsp;&emsp;:</td>
                                        <td>&emsp;&emsp;24</td>
                                    </tr>
                                    <tr>
                                        <td>Contact</td>
                                        <td>&emsp;&emsp;:</td>
                                        <td>&emsp;&emsp;+91 7702445591</td>
                                    </tr>
                                    <tr>
                                        <td>Mail</td>
                                        <td>&emsp;&emsp;:</td>
                                        <td>&emsp;&emsp;<a href="mailto:yashwanthreddy790@gamil.com">yashwanthreddy790@gamil.com</a></td>
                                    </tr>
                                    <tr>
                                        <td>Nationality</td>
                                        <td>&emsp;&emsp;:</td>
                                        <td>&emsp;&emsp;India</td>
                                    </tr>
                                    <tr>
                                        <td>Languages Spoken</td>
                                        <td>&emsp;&emsp;:</td>
                                        <td>&emsp;&emsp;English, Telugu, Hindi.</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
