'use client'
import Image from 'next/image'
import Card from './components/Card'
import { useState, useEffect } from 'react';
import { data } from 'autoprefixer';

export default function Home() {
   const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://canastica.onrender.com/producto')
        .then((data)=>data.json())
        .then((realData)=>{
            setProducts(realData)
        })
    },[])

  return (
    <main>
      {/* <div className="flex items-center justify-center h-14 p-10  bg-gradient-to-r from-pink-400 to-pink-600 shadow-xl">
        <h1 className="font-conforta font-semibold text-4xl">Canas<a className="text-white">Tica</a></h1>
      </div> */}
      <div className="flex flex-wrap items-center justify-center m-10">
        {
          products?.map((data, index)=>{
            return <Card key={index} name={data.nombre} desc={data.descripcion} codProd={data.codigo}/>
          })
        }
      </div>
    </main>
  )
}
 