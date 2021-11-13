import React from "react";
import Reunions from "./Reunions";

const MainSelectionsLinks = ({datasReunion, isLoadingData, getDatascourse}) => {

    const styleMainReunion = {
        display:'flex',
        flexFlow: 'wrap'
    }

    return (
        <div style={styleMainReunion}>
            {
               datasReunion.length !== 0 && datasReunion.map(reunion => {
                    return <Reunions key={reunion.name} reunion={reunion} isLoadingData={isLoadingData} getDatascourse={getDatascourse}/>
                })
            }
        </div>
    )
}


export default MainSelectionsLinks;