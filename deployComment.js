//Creation fonction permettant de deployer plus de commentaires//
    //Creation de nouvelles variables avec nouveau contenu :
    let addComments = '<div id="com4" class="combox">' +
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
                        '</div>';
    //Creation variable eventTarget
    let eventTarget = document.getElementById('deploycom');

    //Creation fonction qui permet de deployer nouveaux commentaires
    function addComs(){
        eventTarget.innerHTML = addComments
    }
    eventTarget.addEventListener('click', addComs)