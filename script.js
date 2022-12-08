document.querySelector('.right-menu__cross').onclick = () => {
  document.querySelector('.right-menu').classList.toggle('right-menu_is-closed');
}

document.querySelector('.nav-toggle').onclick = () => {
  document.querySelector('.right-menu').classList.toggle('right-menu_is-opened');
}