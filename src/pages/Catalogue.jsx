import { useState } from "react";
import React from "react";
import "../styles/catalogue.css";
import { getProduits } from "../api/product";
import Menu from "../components/menu";
import {useSelector, useDispatch} from "react-redux";
import {setPanier} from "../redux/actions/panierAction"

function Catalogue() {
  const [produits, setProduits] = useState();

  const panierInStore = useSelector((state) => state.panierReducer.panier);
  const dispatch = useDispatch();

  /** En remplacement du componentDidMount de Composant classe */
  React.useEffect(() => {

    

    getProduits().then((res) => {
      console.log(res);
      if (res.status == "200") {
        setProduits(res.produits);
      }
    });
  }, []);

  const ajouterPanier = (produit) => {
    let elementPanier = {
      produit_id : produit.id,
      quantite : 1,
      name : produit.name,
      price : produit.price
    }
    dispatch(setPanier(elementPanier));
  };

  return (
    <div>

      <Menu />

      <div className="catalogue">
        {produits ? (
          produits.map((produit) => {
            return (
              <div key={produit.id} className="produit">
                <h4>{produit.name}</h4>
                <h5>{produit.price}</h5>
                <button onClick={() => ajouterPanier(produit)}>
                  Ajouter au panier
                </button>
              </div>
            );
          })
        ) : (
          <h1>Aucun produit</h1>
        )}
      </div>
    </div>
  );
}

export default Catalogue;
