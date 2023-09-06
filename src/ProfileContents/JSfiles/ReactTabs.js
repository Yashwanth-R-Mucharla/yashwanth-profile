import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSfiles/ReactTabs.css';


const ReactTabs=()=>{
    const [toggle, setToggle] = useState(1);
    const toggleTab=(index)=>{
        setToggle(index);
    }
    return(
        <>
        <div className="top-bar"></div>
        <div className="tabs-container">
            <div className={toggle === 1?"tab active-tab":"tab"} onClick={()=>{toggleTab(1)}}>
                HTML</div>
            <div className={toggle === 2?"tab active-tab":"tab"} onClick={()=>{toggleTab(2)}}>
                JavaScript</div>
            <div className={toggle === 3?"tab active-tab":"tab"} onClick={()=>{toggleTab(3)}}>
                Cascading Style Sheets</div>
            <div className={toggle === 4?"tab active-tab":"tab"} onClick={()=>{toggleTab(4)}}>
                New Tab</div>
        </div>
        <div className="Contents">
            <div className={toggle === 1?"Content active-Content":"Content"}>
                <h1><u>HTML</u></h1>
                <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
            </div>
            <div className={toggle === 2?"Content active-Content":"Content"}>
            <h1><u>JavaScript</u></h1>
                <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
            </div>
            <div className={toggle === 3?"Content active-Content":"Content"}>
            <h1><u>Cascading Style Sheets</u></h1>
                <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. </p>
            </div>
            
        </div>
        </>
    )
}

export default ReactTabs;