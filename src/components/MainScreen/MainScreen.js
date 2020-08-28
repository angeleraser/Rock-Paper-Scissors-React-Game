import React from "react";
import { Route } from "react-router";
import "./css/MainScreen.css";
import { LoadScreen } from "../LoadScreen/LoadScreen";
import { useLoad } from "../../components/hooks/useLoad";
import MainScreenContent from "./MainScreenContent";
const Content = () => {
  const [loading, awaitLoad, hiddenLoadScreen] = useLoad(0);

  const loadScreenEvents = () => {
    awaitLoad();
    hiddenLoadScreen(2000);
  };

  return !!loading ? (
    <MainScreenContent loadScreenFunctions={loadScreenEvents} />
  ) : (
    <LoadScreen />
  );
};
const MainScreen = ({ path, ...rest }) => {
  return <Route {...rest} path={path} component={Content} />;
};
export default MainScreen;
