import { useState } from "react";
import React from "react";
import "../styles/panier.css";
import Menu from "../components/menu";
import  {useSelector} from "react-redux"

function Panier() {

    const panierInStore = useSelector((state) => state.panierReducer.panier);

    let commande = {
        "user_id" : 1,
        "amount" : 6000,
        "status" : 1,
        "panier" : panierInStore
    };
  
  /** En remplacement du componentDidMount de Composant classe */
  React.useEffect(() => {
    console.log("panierInStore " , panierInStore);
  }, []);

  
  return (
    <div>

      <Menu />

      <div className="panier">
            Liste produit dans le panier
      </div>
    </div>
  );
}

export default Panier;
