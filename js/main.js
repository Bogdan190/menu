const list = document.querySelector('.list')

list.onclick = handleClick

function handleClick({ target }) {

    if (!target.firstElementChild) return //зачем? 

    target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active')
    });
    target.classList.add('active')
    
    
   

}






