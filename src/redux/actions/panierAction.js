import {SET_PANIER} from "../reducers/panierReducer";

export const setPanier = (produit) => {
    return {
        type : SET_PANIER,
        value : produit
    }
}
