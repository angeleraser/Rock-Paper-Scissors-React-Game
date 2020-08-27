import React from "react";
import { Link } from "react-router-dom";
import "./css/BaseLink.css";
const BaseLink = ({ route, label }) => {
  return (
    <Link className="base-link" to={route}>
      {label}
    </Link>
  );
};

export default BaseLink;
