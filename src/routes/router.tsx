import { Switch, Route } from "react-router-dom";
import Header from "../layout/header";

// ROUTES
import HomeScreen from "./home.screen";

// EXCEPTIONS
import Screen404 from "./screen.404";

function RouterApplication() {

  return (
    <>
     <Header/>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>

        <Route path="/*">
          <Screen404 />
        </Route>
      </Switch>
    </>
  );
}

export default RouterApplication;
