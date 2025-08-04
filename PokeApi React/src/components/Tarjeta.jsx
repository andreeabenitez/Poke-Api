import { useState } from "react";

export default function Tarjeta({id, name, type1, type2, preevolucion}){
    function capitalize(text){
        const firstletter = text.charAt(0);
        const rest = text.slice(1);
        return firstletter.toUpperCase() + rest;
    }
    const [imagen, setImagen] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
    const [estrellas, setEstrellas] = useState([]);

    function cambiarImagen(){
        if(imagen==`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`){
            setImagen(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`)
        }
        else{
            setImagen(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
        }
    }

    function handleClick(e) {
        cambiarImagen();
        // Genera 5 estrellas con posiciones aleatorias
        const nuevasEstrellas = Array.from({length: 10}).map((_, i) => ({
            id: Date.now() + i,
            top: Math.random() * 40,
            left: Math.random() * 80 + 10,
        }));
        setEstrellas(nuevasEstrellas);
        setTimeout(() => setEstrellas([]), 800); // Desaparecen tras 0.8s
    }

    return (
        <>
            <div className="pkmn" onClick={handleClick} style={{position: "relative", overflow: "hidden"}}>
                {/* Estrellas */}
                {estrellas.map(estrella => (
                    <span
                        key={estrella.id}
                        className="estrella"
                        style={{
                            position: "absolute",
                            top: `${estrella.top}%`,
                            left: `${estrella.left}%`,
                            pointerEvents: "none",
                            fontSize: "1.2em",
                            color: "#FFD700",
                            opacity: 0.8,
                            transition: "opacity 0.8s",
                        }}
                    >★</span>
                ))}
                <div className="pkmn__sup">
                    <img
                    className="pkmn__img"
                    src={imagen}
                    alt=""
                    />
                    <p className="pkmn__id">{`ID/${id}`}</p>
                </div>
                <div className="pkmn__inf"> 
                    <h2 className="pkmn__nombre">{capitalize(name)}</h2>
                    <span className="pkmn__tipos">
                    <p className="pkmn__tipo__1">{type1}</p>
                    {type2 &&
                    <p className="pkmn__tipo__2">{type2}</p>}
                    </span>
                    <div className="pkmn__evolucion">
                    {preevolucion &&
                    <>
                    <div className="barra__evolucion"></div>
                    <div className="pkmn__evolucion__texto">
                        <p className="evolucionade">Evoluciona de:</p>
                        <p className="evolucion">{preevolucion}</p>
                    </div></>}
                    </div>
                </div>
            </div>
        </>
    )
}