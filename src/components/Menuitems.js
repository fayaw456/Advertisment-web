import React, { useState } from 'react'

const MenuItems = (props) => {
    const { menu, subMenus, icon,  } = props;
    const [expand, setExpand] = useState(false)
    return (
        <li onClick={props.onClick}>
            <a onClick={()=> setExpand(!expand)} className='menu-item'>
                <div className='menu-icon'>
                    <i class={icon}></i>
                </div>
                <span>{menu}</span></a>
            {subMenus && subMenus.length > 0 ?
                (<ul className={`sub-menu-item ${expand ? "active" : ""}`}>
                    {subMenus.map((menu, index) =>
                    (<li key={index}>
                        <a>{menu.menu}</a>
                    </li>))}
                </ul>
                ) : null}
        </li>
    )
}
export default MenuItems
