import React from "react";
import { Route } from "react-router";
import "./css/OptionsWrapper.css";
import "./css/TBBTMode.css";
import { LoadScreen } from "../LoadScreen/LoadScreen";
import { useLoad } from "../hooks/useLoad";
import TheBigBangTheoryModeScreen from "./TheBigBangTheoryModeScreen";
const Content = () => {
  const [loading, setLoading] = useLoad(2000);
  setLoading();
  return loading ? <LoadScreen /> : <TheBigBangTheoryModeScreen />;
};
const TheBigBangTheoryMode = ({ path, ...rest }) => {
  return <Route exact path={path} component={Content} {...rest} />;
};

export default TheBigBangTheoryMode;
