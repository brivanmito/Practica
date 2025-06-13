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

// // const tipo = 'fire'; // Cambia esto si deseas otro tipo

// // fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
// //   .then(response => response.json())
// //   .then(data => {
// //     const lista = document.getElementById('lista-pokemones');
    
// //     // Trae solo los primeros 10 pokemones
// //     const pokemones = data.pokemon.slice(0, 20);

// //     pokemones.forEach(element => {
// //       const name = element.pokemon.name;

// //       // Segundo fetch para obtener imagen y detalles
// //       fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
// //         .then(respon => respon.json())
// //         .then(datainfo => {
// //           const div = document.createElement('div');
// //           div.className = 'pokemon';

// //           const img = document.createElement('img');
// //           img.src = datainfo.sprites.other['official-artwork'].front_default;


// //           const texto = document.createElement('p');
// //           texto.textContent = name;

// //           div.appendChild(img);
// //           div.appendChild(texto);
// //           lista.appendChild(div);
// //         })
// //         .catch(error => console.error(`Error con el Pokémon ${name}:`, error));
// //     });
// //   })
// //   .catch(error => console.error('Error al obtener el tipo:', error));


const tipologia = 'fire';

fetch(`https://pokeapi.co/api/v2/type/${tipologia}`)
  .then(response => response.json())
  .then(datafetch => {
    const listadepokemones = document.getElementById('lista-pokemones-div');

    // Trae solo los 10 primeros POKEMONES
    const pokemones = datafetch.pokemon.slice(0, 10);

    pokemones.forEach(element => {

      //Obtener el nombre del pokemon y guardarlo en una constante
      const name = element.pokemon.name;

      // Segundo fetch para obtener imagenes
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(secondresponse => secondresponse.json())
      .then(datasecond => {

        const divsecond = document.createElement('div');
        divsecond.className = 'pokemon-info';

        const imagesecond = document.createElement('img');

        imagesecond.src = datasecond.sprites.other['official-artwork'].front_default;

        const textos = document.createElement('p');

        textos.textContent = capitalizarNombres(name);

        divsecond.appendChild(imagesecond);
        divsecond.appendChild(textos);
        listadepokemones.appendChild(divsecond);

      })
      .catch(error => console.error(`Error con el Pokémon ${name}:`, error));
    })

  })
  .catch(error => console.error('Error al obtener el tipo:', error));

//adding a new filerrrrr

function capitalizarNombres(cadena) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}
