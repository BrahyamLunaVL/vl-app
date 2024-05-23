import './AsideComponent.css'
import {ButtonComponent} from './ButtonComponent'

function AsideComponent({title, list}){
    return(
        <aside>
            <div className="aside-content">
                <h2>{title}</h2>
                {list}
            </div>
            <div className='aside-links'>
                <h2>What is next in your VL Journey?</h2>
                <p>We invite you to explore our three websites to see the journey of our company and get a better understanding of our team.</p>
                <ButtonComponent
                    type="large"
                    color="white"
                    text="Explore Hearbeat"
                />
                <ButtonComponent
                    type="large"
                    color="white"
                    text="Explore VL Academy"
                />
                <ButtonComponent
                    type="large"
                    color="white"
                    text="Explore Jobs Portal"
                />
            </div>
        </aside>
    )
}

export {AsideComponent}