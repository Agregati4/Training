document.querySelector('.right-menu__cross').onclick = () => {
  document.querySelector('.right-menu').classList.remove('right-menu_is-opened');
}

document.querySelector('.nav-toggle').onclick = () => {
  document.querySelector('.right-menu').classList.add('right-menu_is-opened');
}