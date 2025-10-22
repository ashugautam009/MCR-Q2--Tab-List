import './style.css'

const Button=(props)=>{
    const{onClick=()=>{},label}=props
    return(
        <div>
            <button onClick={onClick} >{label} </button>
        </div>
    )
}

export default Button