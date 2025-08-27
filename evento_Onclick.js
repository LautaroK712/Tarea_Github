let boton =document.getElementById ("boton");

boton.addEventListener("click", function() {
    this.innerText="Cerrar Sesion";
})

let agregar = document.getElementById("agregar");

agregar.addEventListener("click", function () {
    this.style.display = "none";
});

document.getElementById("Like").onclick = function () {
    alert("Te gustó la definición de: Gato Atigrado");
};

document.getElementById("Like2").onclick = function () {
    alert("Te gustó la definición de: Golden Retriever");
};

let botonesLike = document.querySelectorAll(".Like");

document.getElementById("Like").addEventListener("click", function () {
    let contenedor = this.parentElement;
    let contador = contenedor.querySelector(".contadorLikes");

    let count = parseInt(contador.innerText);
    contador.innerText = count + 1;
});

document.getElementById("Like2").addEventListener("click", function () {
    let contenedor = this.parentElement;
    let contador = contenedor.querySelector(".contadorLikes");

    let count = parseInt(contador.innerText);
    contador.innerText = count + 1;
});