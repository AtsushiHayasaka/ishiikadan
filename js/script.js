'use strict';

{
    const modal_show = document.getElementById('modal_show');
    const modal = document.getElementById('modal');

    console.log(modal_show);
    console.log(modal);

    modal_show.addEventListener('click', () => {
        modal.classList.toggle('is-modal');
        modal.animate([{opacity: '0'}, {opacity: '1'}], 300)

    });


    const drawer = document.getElementById('drawer');
    const hamburger = document.getElementById('js-hamburger');

    hamburger.addEventListener('click', () => {
        drawer.classList.toggle('is-drawerActive');

        if (hamburger.getAttribute('aria-expanded') == 'false') {
            hamburger.setAttribute('aria-expanded','true')
        } else {
            hamburger.setAttribute('aria-expanded','false')
        }
    });
    

    
    
}