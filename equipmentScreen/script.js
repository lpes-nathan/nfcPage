// Service worker check
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./pwabuilder-sw.js")
        .then((reg) => console.log('SW Registered', reg))
        .catch((err) => console.log('Not registered', err));
};



const html = document.querySelector('html');
const modalPWA = document.querySelector('.modalPWA');

function showInstallPromo() {
    modalPWA.style.display = 'block';    
}

function hideInstallPromo() {
    modalPWA.style.transform = 'translateY(50vh)';
    html.style.overflowY = 'scroll';
}



let deferredPrompt;
let unstallSource;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromo();
    ga( 'send', 'event', {
        eventCategory: 'pwa-install',
        eventAction: 'promo-shown',
        nonInteraction: true,
    });
});

const accept = document.querySelector('.primaryBtn');

accept.addEventListener('click', async () => {

    installSource = 'headerInstallButton';

    hideInstallPromo();

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    ga( 'send', 'event', {
        eventCategory: 'pwa-install',
        eventAction: 'promo-clicked',
        eventLabel: 'installSource',
        eventValue: outcome === 'accepted' ? 1 : 0,
    });

    if(outcome === 'dismissed') {
        installSource = null;
    }
    deferredPrompt = null;

});


window.addEventListener('appinstalled', () => {

    hideInstallPromo();

    deferredPrompt = null;

    if (document.visibilityState !== 'visible') {
        return;
    }

    const source = installSource || 'browser';
    ga ('send', 'event', 'pwa-install', 'installed', source);

});