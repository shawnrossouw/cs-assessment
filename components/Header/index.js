import { useState } from 'react';
import style from './style.module.css'
import Logo from '../Logo'
import Link from 'next/link'

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <header className={style.header}>
      <figure>
        <Logo />
      </figure>
      <nav>
        <button onClick={handleToggle} className={`${open ? style.close : style.open}`}><span></span></button>
        <ul className={`${open ? `${style.show}` : ''}`}>
          <li onClick={handleToggle}><Link href='/'><a>Athletes</a></Link></li>
          <li onClick={handleToggle}><Link href='/'><a>Log In</a></Link></li>
          <li onClick={handleToggle}><Link href='/'><a>Sign Up Now</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header