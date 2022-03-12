// Store/Reducers/panierReducer.js

const initialState = {
    panier: [],
    amountPanier : 0
};

/** Possible actions */
export const SET_PANIER = 'SET_PANIER';

export function panierReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {

        case SET_PANIER:
            //Modifier le state panier data
            nextState = {
                ...state,
                panier: [...state.panier, action.value],
            };

            return nextState || state; //Renvoie state si nextState est undefined

        default:
            return state;
    }
}

