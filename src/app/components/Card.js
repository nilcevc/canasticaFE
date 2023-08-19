import Link from "next/link";

export default function Card({name, desc, codProd}){

    return  <div className=" bg-white text-gray-500 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden m-5">
        <Link href={`producto/${codProd}`}>
            <h1 className="text-2xl font-semibold p-5">{name}</h1>
            <p className="p-5">Descripcion: {desc} </p>
        </Link>
    </div>
}