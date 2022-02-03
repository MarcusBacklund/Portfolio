import React from 'react';
import '../App.css';
 
const home = () => {
    return (
        <div className="Container">
            <div className="MainContent">
                <p>Hello, my name is Marcus Backlund</p>
                <h1>I am a experienced frontend developer with great ambitions in graphic design</h1>
                <button className="button1">Button esimerkki</button>
            </div>
                <div className="Content1">
                    <h1>Content1</h1>
                    <p>Content1 content</p>
                </div>
                <div className="Content2">
                    <h1>Content2</h1>
                    <p>Content2 content</p>
                </div>
                <div className="Sidebar">
                    <h2>Sidebar</h2>
                    <p>Text</p>
                </div>
       </div>
    );
}
 
export default home;