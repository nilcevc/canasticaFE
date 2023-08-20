import Link from "next/link";

export default function Card({name, desc, children}){

    return  (
    <div className="flex flex-col justify-center items-center bg-white text-gray-600 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden m-5 hover:shadow-md hover:shadow-pink-300">
        <h1 className=" text-gray-500 text-2xl font-semibold">{name}</h1>
        <p className="text-center">{desc} </p>
        {children}
    </div>
    )
}