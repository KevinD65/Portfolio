
const TopNavbar = (props) => {

    /**
   * Changes the data display state so respective data can be displayed to the screen
   */
     const changeDataDisplayState = (newState) => {
      switch(newState){
        case "intro":
          props.changeDataDisplay("intro");
          break;
        case "project":
          props.changeDataDisplay("project");
          break;
        case "contact":
          props.changeDataDisplay("contact");
          break;
      }
    }

  return (
    <div className="TopNavbar">
      <div onClick = {() => changeDataDisplayState("intro")} className="navbar-component">Introduction</div>
      <div onClick = {() => changeDataDisplayState("project")} className="navbar-component">Projects</div>
      <div onClick = {() => changeDataDisplayState("contact")} className="navbar-component">Contact Me</div>
    </div>
  );
}

export default TopNavbar;