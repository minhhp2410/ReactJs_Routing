import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../App.css";

const menu = [
  {
    name: "Home",
    to: "/home",
    active: true,
  },
  {
    name: "Products",
    to: "/products",
    active: false,
  },
  {
    name: "About",
    to: "/about",
    active: false,
  },
];

const ML = ({ lb, to, isActive }) => {
  return (
    <Route
      path={to}
      exact={isActive}
      children={({ match }) => {
        var id = match ? "aaa" : "";
        return (
          <li className={id}>
            <Link to={to} className="my-link">
              {lb}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenu(menu)}</ul>
      </nav>
    );
  }
  showMenu = (menu) => {
    var r = null;
    r = menu.map((item, index) => {
      return (
        <ML key={index} lb={item.name} to={item.to} isActive={item.active} />
      );
    });
    // console.log(r);
    return r;
  };
}

export default Menu;
