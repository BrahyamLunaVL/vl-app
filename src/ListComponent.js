import './ListComponent.css'
import {ListItemComponent } from './ListItemComponent'

const ListComponent=({listItems, onItemClick})=>{
    return (
        <ul className='list'>
            {listItems.map((item, index) => (
                <ListItemComponent
                    key={index}
                    step={item.step}
                    text={item.text}
                    state={item.state}
                    onClick={() => onItemClick(item.form)}
                />
            ))}
        </ul>
    );
};

export {ListComponent}