import React from "react";
import { withRouter } from "react-router";
import logoIcon from "../../assets/images/js.png";
import logoTitle from "../../assets/images/reactjs.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="app-header">
      <span>
        <a href="#/home" id="appLogo">
          <img src={logoIcon} className="header-icon appLogo" />
          <img src={logoTitle} className="header-icon appTitle" />
        </a>
      </span>
    </div>
  );
};

Header.propTypes = {};

export default withRouter(Header);
