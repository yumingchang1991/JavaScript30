const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    // padding top is used to compensate the height originally taken by nav bar
    // once, the nav bar changed to display: fix, the space it orginally took will release to the rest of content
    // so if we don't compensate that space, the content, or paragraph in this case, will suddenly pull up
    // we don't this sudden pull up, so let's compenstate that
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);