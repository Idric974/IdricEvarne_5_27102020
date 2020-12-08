let oldItems = localStorage.getItem('panier');

let recupPanier = JSON.parse(localStorage.getItem("panier"));

console.log(recupPanier)

montantTotal = 0;

recupPanier.forEach(panier => {
    console.log(panier)

    montantTotal += panier.totalLigne;

    //⇓⇓ Création élément 'tr' pour chaque index ⇓⇓.
    let listePanier = document.createElement('ul');


    //⇓⇓ Met dans les ‘tr’ les infos de l’API ⇓⇓.
    listePanier.innerHTML = `
                 
        <ul>
            <td ><img src=${panier.image}  class="image_panier"></td> 
            <td class="name_panier">Votre ${panier.name}</td>
            <td class="color_panier">de couleur ${panier.color}</td>
            <td class="price_panier">à ${panier.price}€</td>
            <td class="qte_panier">Qté:${panier.qte}</td>
            <td class="total_panier"> pour un total ${panier.totalLigne}€.</td>
        </ul>

    `
    
    //⇓⇓ Ecrit les 'tr'  dans HTML ⇓⇓.
    document.querySelector("tbody").appendChild(listePanier);

})


document.getElementById('montant_total').innerText = `Le total de votre commande est de: ${montantTotal}€`