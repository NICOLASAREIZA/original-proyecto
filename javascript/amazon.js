const abrirModal = document.getElementById("abrirModal");
const miModal = document.getElementById("miModal");
const cerrarModal = document.getElementById("cerrarModal");
const imagenModal = document.getElementById("imagenModal");
const descripcionModal = document.getElementById("descripcionModal");

abrirModal.addEventListener("click", function () {
  miModal.style.display = "block";
});

cerrarModal.addEventListener("click", function () {
  miModal.style.display = "none";
  // Muestra la descripción al cerrar el modal
  descripcionModal.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target == miModal) {
    miModal.style.display = "none";
    // Muestra la descripción al cerrar el modal
    descripcionModal.style.display = "block";
  }
});

const miniaturaItems = document.querySelectorAll(".miniaturaPri");

miniaturaItems.forEach((miniatura) => {
  miniatura.addEventListener("mouseover", function () {
    // Obtén la URL de la imagen de la miniatura
    const urlImagen = miniatura.getAttribute("src");

    // Cambia la imagen principal
    abrirModal.setAttribute("src", urlImagen);
  });

  miniatura.addEventListener("click", function () {
    // Obtén la URL de la imagen de la miniatura clicada
    const urlImagen = miniatura.getAttribute("src");

    // Muestra la imagen en el modal
    imagenModal.setAttribute("src", urlImagen);

    // Muestra la descripción en el modal
    descripcionModal.style.display = "block";

    // Muestra el modal
    miModal.style.display = "block";


  });
});

const miniaturaItemss = document.querySelectorAll(".miniatura, .miniatura1");

miniaturaItemss.forEach((miniatura) => {
  miniatura.addEventListener("mouseover", function () {
    // Obtén la URL de la imagen de la miniatura
    const urlImagen = miniatura.getAttribute("src");

    // Cambia la imagen principal
    imagenModal.setAttribute("src", urlImagen);
  });

  miniatura.addEventListener("click", function () {
    // Obtén la URL de la imagen de la miniatura clicada
    const urlImagen = miniatura.getAttribute("src");

    // Muestra la imagen en el modal
    imagenModal.setAttribute("src", urlImagen);

    // Muestra la descripción en el modal
    descripcionModal.style.display = "block";

    // Muestra el modal
    miModal.style.display = "block";


  });
});


let starRating = document.querySelector('.star-rating');
let ratingDisplay = document.getElementById('rating-display');
let ratings = [1, 2, 3, 4, 5];

starRating.addEventListener('change', function() {
    let checkedRating = ratings.find(rating => starRating.querySelector(`#${rating}star`).checked);
    if (checkedRating) {
        ratingDisplay.textContent = `${checkedRating} out of 5 stars`;
    } else {
        ratingDisplay.textContent = `0 out of 5 stars`;
    }
});;