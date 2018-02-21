const display = document.querySelector('.display');

// Llama al enlace
fetch('https://api.github.com/users/malditoprotozoo')
// Luego, convierte la respuesta que obtiene de la API en json
  .then(response => response.json())
  // Y, finalmente, le pides que haga algo con esa respuesta :3
  .then(response => showInfo(response));

function showInfo(info) {
  let information = `<h3>${info.name}</h3><h4>Seguidores: ${info.followers}</h4><h4>Repositorios: ${info.public_repos}</h4><h4>Gists: ${info.public_gists}</h4><img src="${info.avatar_url}">`;
  display.innerHTML = information;
};