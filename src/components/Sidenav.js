import React, { useEffect, useState } from 'react';
import logo from '../logo/logo192.png';
import MenuItems from './Menuitems';


const menuItems = [
  { name: 'Dashboard', to: '/', icon: "bi bi-speedometer2" },
  { name: 'Home', to: '/home', icon: "bi bi-house" },
  { name: 'Categories', to: '/categories', icon: "bi bi-bookmark", subMenus: [{ menu: 'Electronics' }] },
  { name: 'Advertise Here', to: '/advertisehere', icon: "bi bi-badge-ad" },
  { name: 'About Us', to: '/aboutus', icon: "bi bi-file-person" }
]
const Sidenav = (props) => {
  const [inactive, setInactive] = useState(false)

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu-item').forEach((el) => { el.classList.remove("active"); });
    }
    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <div className={`sidenav ${inactive ? "inactive" : ""}`}>
      <div className='top-section'>
        <div className='logo'>
          <img src={logo} alt='logo192' />
        </div>
        <div onClick={() => { setInactive(!inactive); }} className='rightarrow'>
          {inactive ?
            (<i class="bi bi-arrow-right-square-fill"></i>) :
            (<i class="bi bi-arrow-left-square-fill"></i>)}
        </div>
      </div>
      <div className='divider1'></div>

      <div className='main-menu'>
        <ul className='dot'>
          {menuItems.map((menuItem, index) => (
            <MenuItems
              key={index}
              menu={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              icon={menuItem.icon}
              onClick={() => { if (inactive) { setInactive(false) } }} />))}
        </ul>
      </div>
      <div className='sidenav-footer'></div>
    </div>
  )
}
export default Sidenav