import { useState } from "react";
import React from "react";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import  {useSelector} from "react-redux"

function Menu() {
  
    const panierInStore = useSelector((state) => state.panierReducer.panier)

  return (
    <div className="menu">
      <Link className="link" to="/">Accueil</Link>
      <Link className="link" to="/admin">Admin</Link>
      <Link className="link" to="/panier">Panier <i className="label-panier">{panierInStore.length}</i></Link>
    </div>
  );
}

export default Menu;
