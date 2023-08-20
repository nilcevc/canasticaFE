export default function Flex(props){
    return(
        <div className={`flex ${props.className}`} {...props} >
            {props.children}
        </div>
    )
}