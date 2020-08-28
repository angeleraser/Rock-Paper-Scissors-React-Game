import React from "react";
import { Route } from "react-router";
import "./css/OptionsWrapper.css";
import "./css/StandardMode.css";
import { LoadScreen } from "../LoadScreen/LoadScreen";
import { useLoad } from "../hooks/useLoad";
import StandardModeScreen from "./StandardModeScreen";
const Content = () => {
  const [loading, setLoading] = useLoad(1500);
  setLoading();
  return loading ? <LoadScreen /> : <StandardModeScreen />;
};
const StandardMode = ({ path, ...rest }) => {
  return <Route exact path={path} component={Content} {...rest} />;
};

export default StandardMode;
