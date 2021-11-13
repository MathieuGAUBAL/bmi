import React from "react";
import LoadSpinner from "./LoadSpinner";

const LoadingPage = () => {

/*     const getHeightBody = () => {
        let body = document.querySelector("body");
        return `${body.clientHeight}px`;
    } */

    const loading = {
        position:'absolute',
        display:'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width:'100vw',
        height: '100vh',
        backgroundColor:'#0971f1',
        zIndex:'100'
    }
    return (
        <div style={loading}>
            <LoadSpinner />
        </div>
    )
}


export default LoadingPage;