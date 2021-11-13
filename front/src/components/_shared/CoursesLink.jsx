import React from "react";
import { requestPostInfos } from "../../utils/requestsHTTP/requestPostInfos";

const CoursesLink = ({course, courseRef, isLoadingData, getDatascourse}) => {
    
    const styleCourse = {
        padding:'2px',
        border:'2px solid black',
        cursor: 'pointer'
    }

    const handleClickOnRef = () => {
        isLoadingData(true);
        requestPostInfos('http://localhost:8000/scrap-course-pmu-links', course)
        .then((data) => {
            if(data.status === 'success'){
                isLoadingData(false);
                getDatascourse(data.results)
            }
        })
    }
    return(
        <div style={styleCourse} onClick={() => handleClickOnRef()}>{courseRef}</div>
    )
}


export default CoursesLink;