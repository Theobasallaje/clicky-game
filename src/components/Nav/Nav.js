import React from 'react';
import './index.css'

const Nav = (props) => {
    return (
        <div className="nav">
        <span>Clicky Game</span>
        <span id="guess"></span>
        <span>Score: {props.score + "," + props.topScore}</span>
        </div>
    )
}

export default Nav;