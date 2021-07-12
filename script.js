// Nav bar motion
var pessoalBtn = document.querySelector ("#pessoalNav");
let agendaBtn = document.querySelector ("#agendaNav");
var empresaBtn = document.querySelector ("#empresaNav");

empresaBtn.addEventListener ("click", () => {
    document.getElementById('contentContainer').style.transform = 'translateX(-200vw)';
    document.body.style.overflowY = 'hidden';
});

agendaBtn.addEventListener ("click", () => {
    document.getElementById('contentContainer').style.transform = 'translateX(-100vw)';
    document.body.style.overflowY = 'auto';
});

pessoalBtn.addEventListener ("click", () => {
    document.getElementById('contentContainer').style.transform = 'translateX(0vw)';
    document.body.style.overflowY = 'hidden';
});



// SW Log
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function () {
            console.log('service worker registered');
        })
        .catch(function () {
            console.log('service worker failed');
        });
}