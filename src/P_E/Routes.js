import React from "react";
import Home from "./Home";
import About from "./About";
import NF from "./404";
import Products from "./Products";
import ProductIt from "./Product";
import "../App.css";

const routes=[
    // {
    //     path:'/',
    //     isActive: true,
    //     main: ()=><Home/>
    // },
    {
        path:'/home',
        isActive: true,
        main: ()=><Home/>
    },
    {
        path:'/about',
        isActive: false,
        main: ()=><About/>
    },
    {
        path:'/products',
        isActive: false,
        main: ({match})=><Products match={match}/>
    },
    // {
    //     path:'/products/:slug',
    //     isActive: false,
    //     main: ({match})=><ProductIt match={match}/>
    // },
    {
        isActive: false,
        main: ()=><NF/>
    },
];

export default routes;