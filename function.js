const menuBtn = document.querySelector('.menu-btn');
const linksEl = document.querySelector('.links');
let menuOpen = false;
let linksOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen ) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
  if(!linksOpen){
    linksEl.classList.add('active');
    linksOpen = true;


  } else{
      linksEl.classList.remove('active');
      linksOpen = false;
      
  }
  

});