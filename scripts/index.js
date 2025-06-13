// fetch('https://pokeapi.co/api/v2/type')
//     .then(response => response.json())
//     .then(data => {
//         const lista = document.getElementById("tipos-pokemon");
//         data.results.forEach(tipo => {
//             const li = document.createElement('li')
//             li.textContent = tipo.name;
//             lista.appendChild(li)
//         });
//     })
//     .catch(error => {
//         console.error('Ocurrió un error:', error);
//     })

const tipo = 'fire'; // Cambia esto si deseas otro tipo

fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista-pokemones');
    
    // Trae solo los primeros 10 pokemones
    const pokemones = data.pokemon.slice(0, 20);

    pokemones.forEach(element => {
      const name = element.pokemon.name;

      // Segundo fetch para obtener imagen y detalles
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(respon => respon.json())
        .then(datainfo => {
          const div = document.createElement('div');
          div.className = 'pokemon';

          const img = document.createElement('img');
          img.src = datainfo.sprites.other['official-artwork'].front_default;


          const texto = document.createElement('p');
          texto.textContent = name;

          div.appendChild(img);
          div.appendChild(texto);
          lista.appendChild(div);
        })
        .catch(error => console.error(`Error con el Pokémon ${name}:`, error));
    });
  })
  .catch(error => console.error('Error al obtener el tipo:', error));


const tipologia = 'water';

fetch();

