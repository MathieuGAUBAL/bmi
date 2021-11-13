import React from "react";
import Engine from "../Engine";
import NameHorse from "../_shared/NameHorse";
import NumberArr from "../_shared/NumberArr";
import NumberHorse from "../_shared/NumberHorse";


const MainPanel = ({ datasCourse, input, addHorseName, addDriverName }) => {


    const styleMainPanel = {
        display: 'flex',
        flexFlow: 'wrap'
    }

    const styleMainHead = {
        display: 'flex',
    }

    const styleMainBody = {
        display: 'flex',
    }

    const styleMain = {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '20px'
    }


    const engineInput = (input, horse, driver) => {
        if (addHorseName && addDriverName) {
            return (
                <Engine value={input + ` ${horse.toLowerCase()} ${driver.toLowerCase()}`} />
            )

        } else if (addDriverName) {
            return (
                <Engine value={input + ` ${driver.toLowerCase()}`} />
            )
        } else if (addHorseName) {
            return (
                <Engine value={input + ` ${horse.toLowerCase()}`} />
            )
        } else {
            return (
                <Engine value={input.toLowerCase()} />
            )
        }

    }
    
    return (
        <div style={styleMainPanel}>
            {
                datasCourse[0].starters.map((course, index) => {
                    return (
                        <div style={styleMain} key={course.number}>
                            <div style={styleMainHead}>
                                <NumberHorse number={course.number} />
                                <NumberArr number={datasCourse[0].results.includes(`${index + 1}`) ? (datasCourse[0].results.indexOf(`${index + 1}`) + 1) : false} />
                                <NameHorse name={course.horsename} />
                            </div>
                            <div style={styleMainBody}>
                                {engineInput(input, course.horsename, course.driver)}
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default MainPanel;