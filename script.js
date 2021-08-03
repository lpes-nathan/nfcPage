// Nav bar motion
var empresaBtn = document.querySelector ("#empresaNav");
empresaBtn.addEventListener ("click", () => {
    document.getElementById('contentContainer').style.transform = 'translateX(-200vw)';
    document.body.style.overflowY = 'hidden';
});

var agendaBtn = document.querySelector ("#agendaNav");
agendaBtn.addEventListener ("click", () => {
    document.getElementById('contentContainer').style.transform = 'translateX(-100vw)';
    document.body.style.overflowY = 'auto';
});

var pessoalBtn = document.querySelector ("#pessoalNav");
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