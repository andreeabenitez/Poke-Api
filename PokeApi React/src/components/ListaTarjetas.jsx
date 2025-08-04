import Tarjeta from "./Tarjeta";

export default function ListaTarjetas({arr}){

    return(
        <div className="contenedor">
            {arr.map((pokemon) => <Tarjeta key={pokemon.id} id={pokemon.id} name={pokemon.name} type1={pokemon.types[0].type.name} type2={pokemon.types[1]?.type?.name} preevolucion={pokemon.preevolucion}></Tarjeta>)}
        </div>
    )
}