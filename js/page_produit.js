//⇓⇓ Récupère l’URL de la page ou est l’ID ⇓⇓
const queryString = window.location.search;


//⇓⇓ affiche l’ID ciblée ⇓⇓
console.log(queryString)


//⇓⇓ Affiche les paramètres de l’URL⇓⇓
const urlparams = new URLSearchParams(queryString);
console.log(urlparams)


//⇓⇓ affiche l’ID définitive ⇓⇓
const productId = urlparams.get("idProduit");
console.log(productId)


let totalLigne;


//⇓⇓ récupère les informations à envoyer au panier⇓⇓
function addProduct () {
      // console.log("LISTE DES PRODUITS", produit)
 
       let image = produit.imageUrl
      
       let name = produit.name
     
       let description = produit.description
      
       let price = produit.price
      
       let selectcolor = document.getElementById("couleur");
       let color = selectcolor.options[selectcolor.selectedIndex].text;   
      
       let selectqte = document.getElementById("quantite");
       let qte = selectqte.options[selectqte.selectedIndex].value;  

       if (!qte) {
               alert('Veulliez saisir une qunatité')
               return;
       }  

       totalLigne = price * qte;
       console.log("PRIX LIGNE", totalLigne)


      
        let oldItems = JSON.parse(localStorage.getItem('panier')) || []; 

        let newItem = { 
                _id : produit._id,
                image : produit.imageUrl,
                name : produit.name,
                description : produit.description,
                price : produit.price,
                color : color,
                qte : qte,
                totalLigne : totalLigne

        }; 
        
        oldItems.push(newItem); 
        
        localStorage.setItem('panier', JSON.stringify(oldItems)); 

}

//⇓⇓ Je déclare la variable hors fonction pour étendre son scope⇓⇓
let produit ;


//⇓⇓ Je me connecte à l’API avec l'ID⇓⇓
fetch (`http://localhost:3000/api/teddies/${productId}`)
        .then(function (resultat) {resultat.json()
        .then(function(resultatFinal){

        

                produit = resultatFinal

                        //⇓⇓ Création élément 'tr' pour chaque index ⇓⇓.
                        let vueProduit = document.createElement('tr');

                        
                        //⇓⇓ boucle dynamique qui récupère les couleurs⇓⇓
                        let colorsOptions = '';

                        produit.colors.forEach(color => {
                                console.log(color)
                                colorsOptions += `<option value="${color}">${color}</option>`
                        });


                        //⇓⇓ boucle dynamique qui crée les qunatités⇓⇓
                        let qteOptions = '';

                        for(let i = 1 ; i <= 10 ; i++) {
                                console.log(i)
                                qteOptions += `<option value="${i}">${i}</option>`
                        }


                      

                        
                                //⇓⇓ Injecte le HTML dans le DOM⇓⇓
                                vueProduit.innerHTML = `      
                                        
                                <tr>

                                        <td ><img src= ${produit.imageUrl} class="imageUrl"> </td> 
                                        <td class="name"> ${produit.name} </td>
                                        <td class="description"> ${produit.description} </td>  
                                        <td class="price" > ${produit.price}€ </td>

                                        <select class="choix" id="couleur">
                                                <option value="">Sélectionnez une couleur</option>
                                                ${colorsOptions}
                                        </select>                                                                     
                                        
                                        <select class="choix" id="quantite">
                                                <option value="">Sélectionnez une quantité</option>
                                                ${qteOptions}

                                        </select>
                                        
                                        <button type="button" class="bouton" onclick = "addProduct()"                   
                                        >M'ajouter au Panier</button>

                                </tr>

                                `                         
                        
                        //⇓⇓ Ecrit les 'tr'  dans HTML ⇓⇓.
                        document.querySelector("tbody").appendChild(vueProduit); 

                  
                          
        })
})
   



