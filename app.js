const toggleOn = document.querySelector('.hiddenMenuToggle');
const toggleOff = document.querySelector('.closeMenuToggle');
const hiddenMenu =  document.querySelector('.hidden-menu');

toggleOn.addEventListener('click', () =>{
    hiddenMenu.style.visibility = "visible";
    
});

toggleOff.addEventListener('click', () => {
    hiddenMenu.style.visibility = "hidden";
});