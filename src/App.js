import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ML from "./P_E/Menu";
import Routes from "./P_E/Routes";
import "./App.css";

class App extends Component {
  showContent = (routes) => {
    var r = null;
    if(routes.length>0)
    {
      r=routes.map((rr,index)=>{
        return(
          <Route key={index} path={rr.path} exact component={rr.main} />
        );
      });
    }
    return r;
  };
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <ML/>
          <Switch>
            {this.showContent(Routes)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
