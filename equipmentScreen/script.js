// Nav bar motion
var pessoalBtn = document.querySelector("#pessoalNav");

pessoalBtn.addEventListener("click", () => {

    document.querySelector('#contentContainer').style.transform = 'translateX(0vw)';

    pessoalBtn.classList.add("clickedA");
    agendaBtn.classList.remove("clickedA");
    empresaBtn.classList.remove("clickedA");

    setTimeout(() => {
        document.body.style.overflowY = 'hidden';
    }, 5);

});



var agendaBtn = document.querySelector("#agendaNav");

agendaBtn.addEventListener("click", () => {

    agendaBtn.classList.add("clickedA");
    pessoalBtn.classList.remove("clickedA");
    empresaBtn.classList.remove("clickedA");

    document.querySelector('#contentContainer').style.transform = 'translateX(-100vw)';

    
    setTimeout(() => {
        document.body.style.overflowY = 'scroll';
    }, 5);

});



var empresaBtn = document.querySelector("#empresaNav");
empresaBtn.addEventListener("click", () => {

    empresaBtn.classList.add("clickedA");
    pessoalBtn.classList.remove("clickedA");
    agendaBtn.classList.remove("clickedA");

    document.querySelector('#contentContainer').style.transform = 'translateX(-200vw)';


    setTimeout(() => {
        document.body.style.overflowY = 'hidden';
    }, 5);

});




// Prevent menu changes on url
const menuItems = document.querySelectorAll('.containerNav a[href^="#"]');

menuItems.forEach(item => {

    item.addEventListener('click', scrollToIdOnClick);

})

function scrollToIdOnClick(event) {

    event.preventDefault();
    const to = offsetTop(event.target);

    scrollToPosition(to);

}

function offsetTop () {

    const id = document.querySelector('#topPage');
    return id.offsetTop;

}


function scrollToPosition(to) {

    smoothScrollTo(0, 0)

}



// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};




// Service worker check
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("./pwabuilder-sw.js").then(registration => {
        console.log("SW Registered");
        console.log("registration");
    }).catch(error => {
        console.log("Failed");
        console.log("error");
    })
};


