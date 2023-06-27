import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
  const [show ,handleShow] = useState(false);
  const transtionNavbar = () =>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }

  useEffect(() =>{
window.addEventListener('scroll',transtionNavbar);
return () => window.removeEventListener('scroll',transtionNavbar);
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          className='nav__logo' />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          className='nav__avatar' />

      </div>
    </div>
  )
}

export default Nav