"use client"

import { useState } from "react"
import Button from "../../components/Button"
import TextInput from "../../components/TextInput"

export default function CrearSupermercado(){
    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState("");

    async function crearSuper(){
        // console.log('hola')
        // console.log(nombre)
        // console.log(ubicacion)

        const data = {
            nombre:nombre,
            ubicacion:ubicacion
        }

        await fetch(`https://canastica.onrender.com/supermercado`,{
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((data)=>data.json())
        .then((realData)=>{
            console.log(realData)
        })

    }

    return(
        <div className='flex flex-col basis-full items-center m-10'>
            <div className='m-2'>
                <label>Nombre:</label>
                <TextInput onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div className='m-2'>
                <label>Ubicación:</label>
                <TextInput onChange={(e)=>setUbicacion(e.target.value)}/>
            </div> 
           <Button onClick={crearSuper}>
                Crear
           </Button>
        </div>
    )
}