import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import ProductIt from "./Product";

class Products extends Component {
  render() {
    var Items = [
      {
        id: "1",
        slug: "iphone",
        name: "Iphone X",
        price: "25000000",
      },
      {
        id: "2",
        slug: "samsung1",
        name: "SamSung S20+",
        price: "27000000",
      },
      {
        id: "3",
        slug: "samsung2",
        name: "SamSung Z-Flip",
        price: "50000000",
      },
    ];
    var { match } = this.props;
    var url = match.url;
    console.log(match);
    var res = Items.map((p, i) => {
      return (
        <NavLink to={`${url}/${p.slug}`} key={i}>
          <li className="list-group-item">
            {p.id} - {p.name} - {p.price}
          </li>
        </NavLink>
      );
    });
    return (
      <div className="container">
        <h1>Products List</h1>
        <div className="row">
          <ul className="list-group">{res}</ul>
        </div>

        <div className="row">
          {/* <Route path={`${url}/:slug`} component={ProductIt}/> */}
        </div>
      </div>
    );
  }
}

export default Products;
