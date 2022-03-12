import axios from "axios";

export function getProduits(){

    let url = "https://autoexpress-tp.herokuapp.com/api/produits";

    return axios.get(url, {
        headers : {
            "Access-Control-Allow-Origin" : "*"
        }
    }).then(result => {
        return result.data
    }).catch(err => {
        console.log(err)
    })

}