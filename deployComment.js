//Creation fonction permettant de deployer plus de commentaires//
    //Creation de nouvelles variables avec nouveau contenu :
    let addComments = '<div id="addedComs">' +
                            '<div id="com4" class="combox">' +
                                '<div class="picbox">'+
                                    '<img src="./files/comment4.jpg" />'+
                                '</div>' +
                                '<p style="color:white"><span>dBask</span> Im a simple man, I see Mindspring Memories, I click buy.' +
                                    'Piste favorite : Safe Inside III.</p>' +
                            '</div>' + 
                            '<div id="com5" class="combox">'+
                                '<div class="picbox">' +
                                    '<img src="./files/comment5.jpg" />' +
                                '</div>'+

                                '<p style="color:white"><span>Cardian Matsu</span> he slush of this EP is undeniable.' +
                                'really an album to just sit back and float away into hazy vistas of woods and' +
                                    'mountainsides.' +
                                    'Piste favorite : Safe Inside II.</p>' +
                                '</div>' +
                                /*'<a id="remove"> Show less comments</a>'+*/
                        '</div>';
    //Creation variable eventTarget
    let eventTarget = document.getElementById('deploycom');
    let removeButton =  document.getElementById('removecom');

    //Creation fonction qui permet de deployer nouveaux commentaires
    function addComs(){
        eventTarget.innerHTML = addComments;
        removeButton.style.visibility = "visible";

    }
    eventTarget.addEventListener('click', addComs)

    // Creation fonction qui annule le deployement
    function removeComs(){
        eventTarget.innerHTML = "plus de commentaires";
        removeButton.style.visibility = "hidden";
    }
    removeButton.addEventListener('click', removeComs)