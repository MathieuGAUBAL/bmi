import React from "react";

const NumberHorse = ({ number }) => {
    const styleGlobal = {
        paddingRight: '5px'
    }
    return (
        <p style={styleGlobal}>N&#176;{number}</p>
    )
}

export default NumberHorse;