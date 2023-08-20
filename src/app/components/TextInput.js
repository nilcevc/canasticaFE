export default function TextInput(props){
    return(
        <input className="m-3 mt-1 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-pink-500"{...props}/>
    )
}