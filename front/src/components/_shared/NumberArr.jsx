import React from "react";

const NumberArr = ({ number }) => {
    const styleGlobal = {
        paddingRight:'5px'
    }
    return (
        <>
            {number && <p style={styleGlobal}>Ar. : {number}</p>}
        </>
    )
}

export default NumberArr;