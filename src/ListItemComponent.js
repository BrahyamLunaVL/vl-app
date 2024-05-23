import './ListItemComponent.css'

function ListItemComponent({step, text, state}){
    return (
        <li className={`list-item ${state}`}>
            <div className='list-item-line'></div>
            <div className='list-item-container'>
                <div className='form-step'>
                    <span>{step}</span>
                    <i className="fa-solid fa-check"></i>
                </div>
                <p>{text}</p>
            </div>
        </li>
    );
}

export {ListItemComponent}