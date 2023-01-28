
let btn_enviar = document.getElementById("btn_enviar");
let btn_cerrar = document.getElementById("btn_cerrar");
let modal = document.getElementById("modal");


btn_enviar.addEventListener("click", mostrar_modal)
btn_cerrar.addEventListener("click", cerrar_modal)



function mostrar_modal(){
    modal.show();
    nav.style.right = "-225px"
    background_menu.style.display = "block";
}

function cerrar_modal(){
    modal.close();
    background_menu.style.display = "none";
}
