window.onload = function() {
    fetch('/src/views/recursos/navbar.html')
    .then(response => response.text())
    .then(data => {
          document.querySelector('header').innerHTML = data;
    })

    fetch('/src/views/recursos/footer.html')
    .then(response => response.text())
    .then(data =>{
          document.querySelector('footer').innerHTML = data;
    })
}

const buttonCerrarSesion = document.getElementById('btnCerrarSesion')

buttonCerrarSesion.addEventListener('click', () =>{
      window.location.href = '/src/views/vistas_HU01/autenticacion.html'
      localStorage.removeItem('usuarioValidado')
})