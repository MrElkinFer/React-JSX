import React from "react";

export default function Saludar(props)
{
    console.log(props.UserInfo.nombre)//así se envía un objeto por el prop

    return(
        <div>
            <p>Hola {props.UserInfo.nombre}, su edad es: {props.UserInfo.edad} y su color favorito es el {props.UserInfo.color}. </p>
        </div>
    )
}
export function BotonSaludo(){
    return(
        <div>
            <button>
                Saludar de Nuevo
            </button>
        </div>
    )
}