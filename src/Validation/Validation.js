import React from 'react';

const validation =(props) =>{
    let validationMessage="Text long enough";
    let textLength=props.inputLength;

    if (props.inputLength <= 5){
        validationMessage="Text too short";
    }
    return(
        <div>
            <p>{validationMessage} : Length : {textLength}</p>
        </div>
    )
}

export default validation