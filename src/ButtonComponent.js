import './ButtonComponent.css'

function ButtonComponent({type, color, text}){
    return (
        <button className={`${type}-button ${color}`}>{text}</button>
    )
}

export {ButtonComponent}