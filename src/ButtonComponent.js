import './ButtonComponent.css'

function ButtonComponent({buttonText}){
    return (
        <button className='primary-button'>{buttonText}</button>
    )
}

export {ButtonComponent}