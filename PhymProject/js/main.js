//? Button menu of admin
const toggleUserMenu = document.querySelector('.user_menu i');
const userMenu = document.querySelector('.user_menu--selection');
let statusSelect = false;
toggleUserMenu.addEventListener('click', function() {
    if(!statusSelect) {
        userMenu.classList.add('select');
        statusSelect = true;
    }
    else {
        userMenu.classList.remove('select');
        statusSelect = false;
    }
})