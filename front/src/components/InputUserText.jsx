import React from "react";

const InputUserText = ({input, setInput}) => {

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
           
        </div>
    )
}


export default InputUserText;