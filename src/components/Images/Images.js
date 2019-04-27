import React from 'react';
import './index.css'

const Images = (props) => {
    return (
        <>
        <div id="instructions">
        <h1>Choose a Character</h1>
        <p className="lead">but don't click on any more than once!</p>
        </div>
        <div className="images">
            {props.imageArray.map(image => (
                <img clicked={false} key={image} onClick={() => {
                    props.handleClick(image)
                }}
                    src={image} />
            )
            )
            }
        </div>
        </>
    )
}

export default Images;