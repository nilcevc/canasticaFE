'use client'
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import TextInput from "@/app/components/TextInput";
import Button from "@/app/components/Button";

export default function CrearProducto(){
    const [codigo, setCodigo] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const [marcas, setMarcas] = useState([])

    const [selected, setSelected] = useState('');
    
    const handleChange = event => {
        setSelected(event.target.value);
    };

    useEffect(()=> {
        fetch(`https://canastica.onrender.com/marca`)
        .then((data)=>data.json())
        .then((realData)=>{
            setMarcas(realData)
            })
    },[])
        

    async function crearProducto(){
        // console.log('hola')
        // console.log(nombre)
        // console.log(ubicacion)

        const data = {
            codigo:codigo,
            nombre:nombre,
            descripcion:descripcion,
            idMarca:selected
        }

        await fetch(`https://canastica.onrender.com/producto`,{
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
        <div className='flex flex-col basis-full items-center m-10 text-sm font-medium text-gray-900 mr-4'>
            <p className="text-4xl m-3 mb-6" >Crear supermercado</p>
            <div className='m-2'>
                <label>Codigo:</label>
                <TextInput onChange={(e)=>setCodigo(e.target.value)}/>
            </div>
            <div className='m-2'>
                <label>Nombre</label>
                <TextInput onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div className='m-2'>
                <label>Descripcion</label>
                <TextInput onChange={(e)=>setDescripcion(e.target.value)}/>
            </div>
            <div className='m-2'>
                <label className=" mb-2 text-sm font-medium text-gray-900 mr-4">Marcas</label>
                <select className="mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 w-full p-2.5" value={selected} onChange={handleChange}>
                    <option value={''}>Seleccione la marca</option>
                    {
                        marcas?.map((marcas, index)=>(
                            <option key={index} value={marcas.id}>
                                {marcas.nombre}
                            </option>
                        ))
                    }
                </select>
            </div>
           <Button onClick={crearProducto}>
                Crear
           </Button>
        </div>
    )
}