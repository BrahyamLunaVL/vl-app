import './AsideComponent.css'

function AsideComponent({title, list, links}){
    return(
        <aside>
            <div className="aside-content">
                <h2>{title}</h2>
                {list}
            </div>
            {links}
        </aside>
    )
}

export {AsideComponent}