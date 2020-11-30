//⇓⇓ Je me connecte à l’API ⇓⇓
fetch ('http://localhost:3000/api/teddies')
        .then(function (resultat) {resultat.json()
        .then(function(produits){
            
            //⇓⇓ Boucle récupère éléments tableau + console.log vérification ⇓⇓.
            produits.forEach(function(produit){
                console.log(produit)

                //⇓⇓ Création élément 'tr' pour chaque index ⇓⇓.
                let listeVue = document.createElement('tr');

                //⇓⇓ Met dans les ‘tr’ les infos de l’API ⇓⇓.
                listeVue.innerHTML = `
                             
                    <tr>

                        <td ><img src= ${produit.imageUrl} class="imageUrl"> </td> 
                        <td class="name"> ${produit.name} </td> 
                        <td class="price" > ${produit.price}€ </td>
                        <td > <button class="bouton" id=${produit._id}>Clic Moi</button> </td> 

                    </tr>

                `,
                
                //⇓⇓ Ecrit les 'tr'  dans HTML ⇓⇓.
                document.querySelector("tbody").appendChild(listeVue);


            })
        })
   
})



function printID() {
    
   //⇓⇓ Cible l’ID dans le DOM ⇓⇓
    const id = window.event.target.id;
    console.log(id);

    //⇓⇓ Passe l’ID dans l’URL pour la récupérer ⇓⇓
    window.location.href=`/html/page_produit.html?idProduit=${id}`;
 
}



