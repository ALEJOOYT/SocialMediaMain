document.addEventListener('DOMContentLoaded', function () {
  const tarjeta = document.getElementById('tarjeta');

  // Crear la estructura de la tarjeta
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = "assets/images/avatar-jessica.jpeg";
  img.alt = "";
  figure.appendChild(img);

  const nombreTitulo = document.createElement('div');
  nombreTitulo.classList.add('nombre-titulo');
  const h2 = document.createElement('h2');
  h2.textContent = "Jessica Randall";
  const h4 = document.createElement('h4');
  h4.textContent = "Londres, Reino Unido";
  nombreTitulo.appendChild(h2);
  nombreTitulo.appendChild(h4);

  const p = document.createElement('p');
  p.textContent = '"Desarrolladora de front-end y ávida lectora."';

  const ul = document.createElement('ul');
  ul.id = "redes-sociales";

  const redesSociales = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  redesSociales.forEach(red => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = red;
    li.appendChild(a);
    ul.appendChild(li);
  });

  const h6 = document.createElement('h6');
  h6.textContent = "SeedProgramming";

  tarjeta.appendChild(figure);
  tarjeta.appendChild(nombreTitulo);
  tarjeta.appendChild(p);
  tarjeta.appendChild(ul);
  tarjeta.appendChild(h6);

  // Botón para agregar tarjeta
  const addCardButton = document.getElementById('addCardButton');
  addCardButton.addEventListener('click', function () {
    const nuevaTarjeta = tarjeta.cloneNode(true);
    document.body.insertBefore(nuevaTarjeta, addCardButton);
  });
});
