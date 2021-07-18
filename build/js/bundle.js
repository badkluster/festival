document.addEventListener("DOMContentLoaded", function () {
  scrollNav();
  //   navegacionFija();
});

function navegacionFija() {
  const barra = document.querySelector(".header");

  // Registrar el Intersection Observer
  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      barra.classList.remove("fijo");
    } else {
      barra.classList.add("fijo");
    }
  });

  // Elemento a observar
  observer.observe(document.querySelector(".sobre-festival"));
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");

  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const seccion = document.querySelector(e.target.attributes.href.value);

      seccion.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `build/img/thumb/${i}.webp`;

    imagen.dataset.imagenid = i;

    //AÑADIIR LA FUNCION DE MOSTRAR IMAGEN
    imagen.onclick = mostrarImagen;

    const lista = document.createElement("LI");
    lista.appendChild(imagen);

    galeria.appendChild(lista);
  }
}

function mostrarImagen(e) {
  const id = parseInt(e.target.dataset.imagenid);

  const imagen = document.createElement("IMG");

  //generar imagen
  imagen.src = `build/img/grande/${id}.webp`;

  const overlay = document.createElement("DIV");

  overlay.appendChild(imagen);
  overlay.classList.add("overlay");

  //crear boton para cerrar imagen
  const cerrarImagen = document.createElement("P");
  cerrarImagen.textContent = "X";
  cerrarImagen.classList.add("btn-cerrar");

  overlay.appendChild(cerrarImagen);

  // cuando se presiona, se cierra la imagen

  cerrarImagen.onclick = () => {
    overlay.remove();
  };

  overlay.onclick = () => {
    overlay.remove();
  };

  //mostrar en el HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);

  body.classList.add("fijarbody");
}
