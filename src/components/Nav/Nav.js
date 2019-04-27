import React from 'react';
import './index.css'

const Nav = (props) => {
    return (
        <>
        <div className="navbar navbar-expand-lg">
            <span id="title">Clicky Game</span>
            <span id="guess"></span>
            {/* <span>Score: {props.score + "," + props.topScore}</span> */}
            <div>
                <span id="score">Score: {props.score}</span><span id="topScore">Top Score: {props.topScore}</span>
            </div>
        </div>

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                {/* <h1 className="display-4">Choose a Character</h1>
                <p className="lead">but don't click on any more than once!</p> */}
            </div>
        </div>
        </>
    )
}

export default Nav;