'use client'

import { useState, useEffect } from 'react';

export default function InfoProducto({params}){
    const [product, setProduct] = useState({});

    useEffect(()=>{
        fetch(`https://canastica.onrender.com/producto/${params.codigoProducto}`)
        .then((data)=>data.json())
        .then((realData)=>{
            setProduct(realData)
        })
    },[])

    return(
        <main>
            <div >
                <div className="p-10">
                    <h1 className="font-bold text-4xl">{product.nombre}</h1>
                    <h3> {product.nombreMarca} </h3>
                    <p>{product.descripcion}</p>
                </div>
                
                <div className="flex items-center justify-center h-14 p-10">
                    <table>
                        <thead>
                        <tr>
                            <th>Supermercado</th> 
                            <th>Ubicación</th>
                            <th>Precio</th>
                        </tr>
                    </thead>        
                    <tbody>
                    {
                    product?.supermercadosXProductoDTOList?.map((supe, index)=>(
                        <tr key={index}>
                            <td> {supe.nombreSuper}</td>
                            <td> {supe.ubicacion}</td>
                            <td >{supe.precio}</td>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>            
        </div>
           
        </main>
        ) 


}