export default function Button(props){
    return(
        <button className="m-8 rounded-xl w-48 h-10 bg-gray-300 text-gray-500 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-300 hover:text-white" {...props}>{props.children}</button>
    )
}