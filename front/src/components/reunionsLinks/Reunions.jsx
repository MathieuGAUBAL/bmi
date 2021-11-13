import React from "react";
import CoursesLink from "../_shared/CoursesLink";
import { getRefLinksCourses } from "../../utils/links/getRefLinksCourses";
const Reunions = ({ reunion, isLoadingData, getDatascourse }) => {

    const styleReunion = {
        display: 'flex',
        alignItems: 'center'
    }

    const styleMainCourse = {
        display:'flex',
        marginRight:'10px'
    }

    const sytleH3 = {
        padding:'0.5px',
        border:'2px solid black'
    }



    return (
        <div style={styleReunion}>
            <h3 style={sytleH3}>{reunion.name} {reunion.ref}</h3>
            <div style={styleMainCourse}>
                {
                    reunion.urls.length !== 0 && reunion.urls.map(course => {
                        let courseRef = getRefLinksCourses(course);
                        return <CoursesLink key={course} course={course} courseRef={courseRef} isLoadingData={isLoadingData} getDatascourse={getDatascourse} />
                    })
                }
            </div>

        </div>
    )
}

export default Reunions;