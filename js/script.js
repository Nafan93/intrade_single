document.addEventListener('DOMContentLoaded', () => {
    //
    const btnOpenMenu = document.querySelector('#btnOpenMenu');
    const menu = document.querySelector('#menu');
    const menu__link = document.querySelector('#menu__link');
    //
    const award_item = document.querySelector('#award_item');
    //
    btnOpenMenu.addEventListener('click', () => {
        
        switch (true) {
            case btnOpenMenu.classList.contains('menu-btn--active'):
                btnOpenMenu.classList.remove('menu-btn--active')
                menu.classList.remove('menu_active')
                menu__link.classList.remove('active')
                console.log("active has removed");
            break;

            default:
                btnOpenMenu.classList.add('menu-btn--active')
                menu.classList.add('menu_active')
                menu__link.classList.add('active')
                console.log("active has added");
            break;
        }   
    });
    //

   
    //
});