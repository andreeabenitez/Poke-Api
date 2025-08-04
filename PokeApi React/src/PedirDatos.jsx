export async function evolucion(id) {
    const URL_PKMN_SPECIES = "https://pokeapi.co/api/v2/pokemon-species"
    const respuesta = await fetch(`${URL_PKMN_SPECIES}/${id}`);
    const datos = await respuesta.json();
    //console.log(datos)
    let preevolucion = datos.evolves_from_species;
    if(preevolucion !== null){
      preevolucion = datos.evolves_from_species.name;
    }
    return preevolucion;
  }

export default async function pedirDatos(pagina = 1) {
    const URL_BASE = "https://pokeapi.co/api/v2/pokemon"
    const MAX_PKMN = 18;
    let arr = [];
    try {
      const inicio = (pagina - 1) * MAX_PKMN + 1;
      const fin = inicio + MAX_PKMN -1;
      for (let i = inicio; i <= fin; i++) {
          const response = await fetch(`${URL_BASE}/${i}`);
          const data = await response.json();
          let preevolucion = await evolucion(data.id);
          arr.push({...data, preevolucion})
          //console.log(arr);
      }
      return arr;
    } catch (e) {
      console.error(`Error: ${e}`)
    }
  }
