import React from "react";

const styleGlobal = {
    paddingRight:'5px'
}

const NameHorse = ({name}) => {
    return (
        <p style={styleGlobal}>{name}</p>
    )
}

export default NameHorse;