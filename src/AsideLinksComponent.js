import {ButtonComponent} from './ButtonComponent'
function AsideLinksComponents(){
    return(
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
    )
}

export {AsideLinksComponents}