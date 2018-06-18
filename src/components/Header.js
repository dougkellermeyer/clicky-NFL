import React from 'react';

const Header = (props)=> (
    <nav style={{background: "purple", color: "white"}} className={"navbar navbar-default sticky-top"}>
        <div className={"conatiner"}>
            <div>Twitch Clicker</div>
            <div>score:{props.score}</div>
        </div>
    </nav>
);

export default Header;