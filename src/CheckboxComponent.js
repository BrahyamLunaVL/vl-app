import "./CheckboxComponent.css";

function CheckboxComponent() {
    return(
        <div className='checkbox-section'>
            <div className="checkbox-container">
                <input type="checkbox"/>
                <i className="checkbox-icon fa-solid fa-check check"></i>
            </div>
            <p>Are you a citizen of the country you're currently living in?</p>
        </div>
    )
}

export {CheckboxComponent}