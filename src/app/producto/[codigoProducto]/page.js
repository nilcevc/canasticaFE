'use client'

import Button from '@/app/components/Button';
import TextInput from '@/app/components/TextInput';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function InfoProducto({params}){
    const [product, setProduct] = useState({});
    const [supermercados, setSupermercados] = useState([])
    const [precio, setPrecio] = useState("")

    const handleChange = event => {
        setSelected(event.target.value);
    };

    const [selected, setSelected] = useState('');

    function getProduct(){
        fetch(`https://canastica.onrender.com/producto/${params.codigoProducto}`)
        .then((data)=>data.json())
        .then((realData)=>{
            setProduct(realData)
            setPrecio("")
        })
    }

    async function agregarInfo(){

        const data = {
            codigoProducto:params.codigoProducto,
            idSuper:selected,
            precio:precio
        }

        await fetch(`https://canastica.onrender.com/supermercado/asignar`,{
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((data)=>data.json())
        .then((realData)=>{
            getProduct()
        })

    }

    useEffect(()=>{
        getProduct()

        fetch(`https://canastica.onrender.com/supermercado`)
        .then((data)=>data.json())
        .then((realData)=>{
            setSupermercados(realData)
        })
    },[])

    return(
        <main>
            <div>
                <div className="p-10">
                    <h1 className="font-bold text-4xl">{product.nombre}</h1>
                    <h3> {product.nombreMarca} </h3>
                    <p>{product.descripcion}</p>
                </div>
                
                <div className="relative overflow-x-auto sm:rounded-2xl ml-20 mr-20">
                    <table className=" w-full text-md text-left text-gray-700">
                        <thead className="text-xs text-black uppercase bg-pink-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">Supermercado</th> 
                                <th scope="col" className="px-6 py-3">Ubicación</th>
                                <th scope="col" className="px-6 py-3">Precio</th>
                            </tr>
                        </thead>        
                        <tbody>
                            {
                            product?.supermercadosXProductoDTOList?.map((supe, index)=>(
                            <tr key={index} className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> {supe.nombreSuper}</th>
                                <td className="px-6 py-4"> {supe.ubicacion}</td>
                                <td className="px-6 py-4">₡{supe.precio}</td>
                            </tr>
                            ))
                            }
                        </tbody>
                    </table>                    
                </div> 
                <div className='m-10 text-center text-gray-500'>
                    <p>Comparación de precios entre supermercados</p>
                </div>
                <div className='ml-10 text-lg'>
                    <p>Agregar otro precio</p>
                </div>
                <div className='m-3 text-center mb-2 text-sm font-medium text-gray-900 mr-4'>
                    <label className=' mb-2 text-sm font-medium text-gray-900 mr-4'>Supermercado</label>
                    <select className='mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 w-1/4 p-2.5' value={selected} onChange={handleChange}>
                        <option value=''>Seleccione el supermercado</option>
                        {
                            supermercados?.map((supermercados, index)=>(
                                <option key={index} value={supermercados.id}>
                                    {supermercados.nombre}
                                </option>
                            ))
                        }
                    </select>
                    <label className='mb-2 mr-1 text-sm font-medium text-gray-900'>Precio</label>
                    <TextInput value={precio} onChange={(e)=>setPrecio(e.target.value)}/>
                    <Button disabled={selected === ''}  onClick={agregarInfo}>Agregar</Button>
                </div>
            </div>
        </main>
    ) 


}