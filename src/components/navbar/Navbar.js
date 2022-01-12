import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.NavBar}>
    <h1>Math Magicians</h1>
    <nav className={styles.NavTag}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.NavLinkActive : null)}>Home</NavLink>
      |
      <NavLink to="calculator" className={({ isActive }) => (isActive ? styles.NavLinkActive : null)}>Calculator</NavLink>
      |
      <NavLink to="quote" className={({ isActive }) => (isActive ? styles.NavLinkActive : null)}>Quote</NavLink>
    </nav>
  </div>
);

export default Navbar;
