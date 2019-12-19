import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

/*PAGES*/
import Home from "./pages/home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;