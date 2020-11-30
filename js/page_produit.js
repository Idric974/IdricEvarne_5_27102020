//⇓⇓ Récupère l’URL de la page ou est l’ID ⇓⇓
const queryString = window.location.search;

//⇓⇓ affiche l’ID ciblée ⇓⇓
console.log(queryString)

//⇓⇓ Affiche les paramètres de l’URL⇓⇓
const urlparams = new URLSearchParams(queryString);
console.log(urlparams)


const productId = urlparams.get("idProduit");
console.log(productId)






//⇓⇓ Je me connecte à l’API avec l'ID⇓⇓
fetch (`http://localhost:3000/api/teddies/${productId}`)
        .then(function (resultat) {resultat.json()
        .then(function(produit){
            
            

        })
   
})