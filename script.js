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
    var el = document.getElementById(element) || element;
    el.style.opacity=0;
    el.addEventListener('transitionend',setToNone);
}

function setToNone(){
    this.style.display='none'
}


function deployCV(){
    let CV_container = document.createElement('DIV');
    CV_container.classList='fullscreen flex-center';
    CV_container.style.backgroundColor='rgba(0,0,0,0.3)'
    CV_container.style.transition='0.2s';
    let CV_image = document.createElement('img');
    CV_image.src='CV 30-9-20-1.png';
    CV_image.style.height='90%';
    CV_container.appendChild(CV_image);
    document.body.appendChild(CV_container);
    CV_container.onclick=function(){closeElement(CV_container)};
    CV_image.onclick=function(){open('CV 30-9-20-1.png','_blank')};
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