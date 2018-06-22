import React from 'react';
import "./Header.css";

const Header = (props)=> (
    <nav style={{background: "purple", color: "white"}} className={"navbar navbar-default sticky-top"}>
        <div className={"conatiner"}>
            <div>score:{props.score}</div>
        </div>
    </nav>
);

export default Header;