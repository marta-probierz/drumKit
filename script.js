// playing - keyboard

document.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
        key.classList.add('whenPlaying');
    
    audio.load();
    audio.loadeddata = 0;
    audio.play();
});



// playing - mouse 

const keys = document.querySelectorAll('#key');
const sounds = document.getElementsByTagName('audio');

const keyBtn = keys.forEach(e => {
    e.addEventListener('click', elem => {
        for (el of sounds) {
            if (e.className === el.className) {
                e.classList.add('whenPlaying');
                el.load();
                el.loadeddata = 0;
                el.play();
            }
        }
    }) 
});



// remove transition

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('whenPlaying');
}



// keys

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

