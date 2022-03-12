import { useState } from "react";

import "../styles/accueil.css";
import "../styles/boisson.css";

import { Boisson, Incrediant } from "./Boissons";

function Accueil() {
  const [boisson, setBoisson] = useState();

  const createBoisson = (event) => {
    event.preventDefault();
    var nom = event.target["nom"].value;
    var prix = event.target["prix"].value;
    var b = new Boisson(nom, prix);
    setBoisson(b);
  };

  const ajouterIncredient = (event) => {
    event.preventDefault();
    var nom = event.target["nom"].value;
    var prix = event.target["prix"].value;
    setBoisson(new Incrediant(nom, prix, boisson));
  };

  return (
    <div className="accueil">
      <div className="form">
        <form onSubmit={createBoisson}>
          <input type="text" name="nom" placeholder="Nom de la boisson" />
          <input type="text" name="prix" placeholder="Prix" />
          <button type="submit">Entrer</button>
        </form>
      </div>
      <div className="panier">
        {boisson ? (
          <div>
            <div className="boisson">
              <h3>{boisson.nom}</h3>
              <h1 style={{ color: "red", textAlign: "center" }}>
                {boisson.prix()} $
              </h1>
            </div>
            <h1>Prix total : {boisson.prix()}</h1>
            <div>
              <form onSubmit={ajouterIncredient}>
                <input type="text" name="nom" placeholder="Nom incrediant" />
                <input type="text" name="prix" placeholder="Prix incrediant" />
                <button type="submit">Ajouter incrediant</button>
              </form>
            </div>
          </div>
        ) : (
          <h1>Le panier est vide</h1>
        )}
      </div>
    </div>
  );
}

export default Accueil;
