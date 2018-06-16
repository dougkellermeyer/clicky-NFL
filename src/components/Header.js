import React from 'react';

const Header = (props)=> (
    <nav style={{background: "purple", color: "white"}} className={"navbar navbar-default sticky-top"}>
        <div className={"conatiner"}>
            <div>
                <h1>Twitch Clicker</h1>
                </div>
            <div>score:{props.score}</div>
        </div>
    </nav>
);

export default Header;