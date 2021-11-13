import React from "react";
import EngineClass from '../utils/engine_bmi/EngineClass';


const Engine = ({ value }) => {


    const styleEngineMain = {
        display:'flex'
    }
    const styleNumber = {
        border : '2px solid black'
    }

    const display = (values) => {
        let bmi = new EngineClass();

        return (
            <div style={styleEngineMain}>
                {
                    bmi.calculator(values).map((mode, index1) => {
                        return (
                            <div key={index1}>
                                {
                                    mode.map((item, index2) => {
                                        return (<p style={styleNumber} key={index1 + index2}>{item}</p>)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            {display(value.split(''))}
        </>

    )
}

export default Engine;