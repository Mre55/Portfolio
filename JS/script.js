const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-btn');

const mobile_menu = document.querySelector('.mobile-menu')

openMobileMenu.forEach(button => {
    button.addEventListener('click', () => {
        const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
        openMenu(mobileMenu, mainTag, humburgerButton);
    })
})

closeMobileMenu.forEach(button => {
    button.addEventListener('click', () => {
        const mobileMenu = button.closest('.mobile-menu')
        closeMenu(mobileMenu);
    })
})

function openMenu(mobileMenu, mainTag, humburgerButton) {
    if(mobileMenu == null){
        return
    } else{

        mobileMenu.classList.add('active');
        mainTag.classList.add('fixed_postion');
        humburgerButton.classList.add('hide');
    }
}
 
function closeMenu(mobileMenu) {
    if(mobileMenu == null) {
        return
    }else{
        mainTag.classList.remove('fixed_postion')
        mobileMenu.classList.remove('active');
        humburgerButton.classList.remove('hide');
    }
}

menuContainer.addEventListener('click', ()=> {
    mainTag.classList.remove('fixed_postion');
    mobile_menu.classList.remove('active');
    humburgerButton.classList.remove('hide');
})