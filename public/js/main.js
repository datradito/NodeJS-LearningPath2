const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

backdropClipHandler = () => {
    backdrop.style.display = 'none';
    sideDrawer.classList.remove('open');
}

manuToggleClickHandler = () => {
    backdrop.style.display = 'block';
    sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClipHandler);
menuToggle.addEventListener('click', backdropClipHandler);