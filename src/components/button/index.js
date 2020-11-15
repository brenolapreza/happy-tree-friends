import './style.scss'
export default function Button(props){
    return(
        <button className="btn-main" href={props.endereco}>{props.value}</button>
    )
}