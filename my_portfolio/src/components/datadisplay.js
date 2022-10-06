import React from "react";
import Introduction from "./introduction";

const DataDisplay = (props) => {
    let currentDataDisplay = props.currentDataDisplay;
    //console.log(currentDataDisplay);
    
    return (
        currentDataDisplay === "intro"? <Introduction changeDataDisplay = {props.changeDataDisplay}/>: 
        (currentDataDisplay === "project" ? <div>Project</div>:
        currentDataDisplay === "contact"? <div>Contact Me</div>:
        (<div>NOT INTRO</div>))
);
}

export default DataDisplay;