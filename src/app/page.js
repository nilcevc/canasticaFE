'use client'
import Image from 'next/image'
import Card from './components/Card'
import { useState, useEffect } from 'react';
import { data } from 'autoprefixer';
import Link from 'next/link';
import Button from './components/Button';

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
      <h1 className="text-5xl font-light m-8 text-center text-gray-600">Productos</h1>

      <div className="flex flex-row">
        <Button>
          <Link href={`supermercados`}>
            Ver supermercados
          </Link>
        </Button>
        <Button>
          <Link href={'producto/crear'}>
            Crear producto
          </Link>
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center">

        {
          products?.map((data, index)=>{
            return <Link key={index} href={`producto/${data?.codigo}`}><Card name={data.nombre} desc={data.descripcion} codProd={data.codigo}/></Link>
          })
        }
      </div>
    </main>
  )
}
 