import React from "react";
import images from "../../images/leftpart_bg.png";
function Sidebar() {
  return (
    <div className="left__container">
      <header>
        <h2 className="title">PROJECT MANAGEMENT<br/> SYSTEM</h2>
        <h2 className="text">
          Manage your - <br />
          Tasks, Projects & Teams
        </h2>
      </header>
      <div className="artarea">
        <div className="art__image">
          <img src={images} alt="" className="left__bg__img" />
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
