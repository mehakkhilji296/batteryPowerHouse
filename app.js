const menu_items = getEelement("menu_items");
const menu = getEelement("menu");


menu.addEventListener('click',()=>{
    if (menu_items.style.display == 'none'){
        menu_items.style.display = 'flex';
    }
    else  {
        menu_items.style.display = 'none';
    }

});

function getEelement(name){
    return document.getElementById(name);
}