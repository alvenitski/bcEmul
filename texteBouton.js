// Creation fonction avec modif texte bouton suivre //
  // Creation variable assignée à objet//
  let bouton = document.getElementById('bouton');

  //Creation fonction EventHandler modifiant contenu texte
  function modifTexteBouton(){
    bouton.innerHTML = "Cessez de suivre";
    //Suppression eventListener
    bouton.removeEventListener('mouseout', modifTexteBouton);
  }
  bouton.addEventListener('mouseover', modifTexteBouton);

  //Creation fonction EventHandler qui reset le contenu
  function reset(){
    bouton.innerHTML="Suivre";
  }
   bouton.addEventListener('mouseout', reset)



