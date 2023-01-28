/****************************VARIABLES-***************************/

//Variables para menú
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav_menu");
background_menu = document.getElementById("back_menu");


//Variables para mostrar más texto

let hide_text = document.getElementById("hide_text");
let hide_text_btn = document.getElementById("hide_text_btn");

hide_text_btn.addEventListener("click", toggleText);



//Variables para mostrar el modal de  mensaje enviado


/*/************************FUNCIONES ************************ /*/

/*---------------------Mostar menú---------------------*/
function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";

}

function ocultar_menu(){

    nav.style.right = "-225px"
    background_menu.style.display = "none"
    modal.close();
}


/*------------------Mostrar mas texto------------------*/

function toggleText(){
    hide_text.classList.toggle('show');

    if(hide_text.classList.contains('show')){
        hide_text_btn.innerHTML = 'Leer menos';
    }
    else{
        hide_text_btn.innerHTML = 'Leer más...';
    }
}


/*------------------Mostrar modal------------------*/

