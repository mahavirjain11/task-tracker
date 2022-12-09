import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

// setting default values for props
Header.defaultProps = {
  title: "Task Tracker",
};

// shows warning that correct data type is used for the prop values

Header.propTypes = {
  title: PropTypes.string,
};

// css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
