// Nav bar motion
var pessoalBtn = document.querySelector ("#pessoalNav");

pessoalBtn.addEventListener ("click", () => {

    document.querySelector('#contentContainer').style.transform = 'translateX(0vw)';

    pessoalBtn.classList.add("clickedA");
    agendaBtn.classList.remove("clickedA");
    empresaBtn.classList.remove("clickedA");

    document.body.style.overflowY = 'hidden';

});



var agendaBtn = document.querySelector ("#agendaNav");

agendaBtn.addEventListener ("click", () => {

    agendaBtn.classList.add("clickedA");
    pessoalBtn.classList.remove("clickedA");
    empresaBtn.classList.remove("clickedA");

    document.querySelector('#contentContainer').style.transform = 'translateX(-100vw)';

    document.body.style.overflowY = 'scroll';
    
});



var empresaBtn = document.querySelector ("#empresaNav");
empresaBtn.addEventListener ("click", () => {
    
    empresaBtn.classList.add("clickedA");
    pessoalBtn.classList.remove("clickedA");
    agendaBtn.classList.remove("clickedA");
    
    document.querySelector('#contentContainer').style.transform = 'translateX(-200vw)';
    
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