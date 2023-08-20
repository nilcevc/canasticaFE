"use client"

import { useEffect, useState } from "react"
import Button from "../components/Button";
import Link from "next/link";
import Card from "../components/Card";

export default function Supermercados(){
    const [supermercados, setSupermercados] = useState([]);

    useEffect(()=>{
        fetch('https://canastica.onrender.com/supermercado')
        .then((data)=>data.json())
        .then((realData)=>{
            setSupermercados(realData)
        })
 },[])

    return (
        <main>
            <h1 className="text-5xl font-light m-8 text-center text-gray-600">Supermercados</h1>
            <Button>
                <Link href={`supermercados/crear`}>
                    Crear supermercado
                </Link>
            </Button>
            <div className="flex flex-wrap items-center justify-center">
                {
                    supermercados?.map((data, index)=>{
                        return <Card key={index} name={data.nombre} desc={data.ubicacion} codProd={data.id}>
                        </Card>
                    }) 
                }
            </div>
        </main>
    )
 }