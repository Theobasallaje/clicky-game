import React from 'react';
import './index.css'

const Images = (props) => {
    return (
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
    )
}

export default Images;