formulario = document.getElementById("aceptado");
mensaje = document.getElementById("alerta");

formulario.addEventListener('submit', e => {
  e.preventDefault(); 
  mensaje.classList.remove('d-none'); 
  setTimeout(() => {
    mensaje.classList.add('d-none');
    formulario.reset();
  }, 3000);
});