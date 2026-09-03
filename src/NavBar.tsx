import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(): React.ReactElement {
  const checkActive = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : ''

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to='/' className={checkActive}>Home</NavLink> | 
      <NavLink to='/about' className={checkActive} style={{ marginLeft: "10px" }}>About</NavLink> | 
      <NavLink to='/contact' className={checkActive} style={{ marginLeft: "10px" }}>Contact</NavLink>
    </nav>
  )
}

export default NavBar
