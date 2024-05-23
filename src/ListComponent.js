import './ListComponent.css'
import {ListItemComponent } from './ListItemComponent'

const ListComponent = ({ listItems }) => {
    return (
        <ul className='list'>
            {listItems.map((item, index) => (
                <ListItemComponent
                    key={index}
                    step={item.step}
                    text={item.text}
                    state={item.state}
                />
            ))}
        </ul>
    );
};

export {ListComponent}