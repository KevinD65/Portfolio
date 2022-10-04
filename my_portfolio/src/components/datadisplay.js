const DataDisplay = (props) => {
    let currentDataDisplay = props.currentDataDisplay;
    //console.log(currentDataDisplay);
    
    return (
        currentDataDisplay == "intro"? <div>Intro</div>: 
        (currentDataDisplay == "project" ? <div>Project</div>:
        currentDataDisplay == "contact"? <div>Contact Me</div>:
        (<div>NOT INTRO</div>))
);
}

export default DataDisplay;