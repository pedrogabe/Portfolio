var gameInProgress_Warning_displayed = false;

function shootGame(unpauseDirectly){
    if(unpauseDirectly==false){
        let fullscreenWarning = document.getElementById('gameInProgressWarning');
        fullscreenWarning.style.display='flex';
        fullscreenWarning.style.opacity=1
    }else{
        gameInProgress_Warning_displayed=true;
        closeElement('gameInProgressWarning')
        centerElement('.game-container')
        unpause()
    }
}
function closeElement(element){
    var el = document.getElementById(element);
    el.style.opacity=0;
    el.addEventListener('transitionend',setToNone);
}

function setToNone(){
    this.style.display='none'
}


var dialog = document.createElement('div');
dialog.className='dialog'
dialog.innerHTML='<a target="_blank" href="https://pedrogabe.github.io/Contador-de-tasks">Abrir Contador</a><br><a target="_blank" href="https://github.com/pedrogabe/Contador-de-tasks">Ver en Github</a>'
function deploy(e){
    console.log(e);
    dialog.style.left=e.pageX+'px';
    dialog.style.top=e.pageY+'px';
    dialog.style.transform='translate(-50%,-100%)'
    document.body.appendChild(dialog)
    document.querySelector('.c .video-cover').setAttribute('hold','')
    dialog.addEventListener('mouseleave',function(e){
            document.querySelector('.c .video-cover').removeAttribute('hold')
            dialog.remove()
    })
}


function displayContact(contactType){
    document.querySelector('.contact-info').setAttribute('contact',contactType);
}

function centerElement(elementQuerySelector){
    var elementRect = document.querySelector(elementQuerySelector).getBoundingClientRect();
    var height = elementRect.height;
    var pageY = elementRect.y+window.scrollY;
    window.scrollTo(0,pageY-(window.innerHeight-height)/2);
}