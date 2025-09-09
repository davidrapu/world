import styles from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <nav className={styles.navBar}>
        <Link to='/'>
            <img className={styles.img} src={logo} alt="Worldwise Logo" />
        </Link>
        <ul className={styles.locations}>
            <li className={styles.li}>
                <NavLink className={styles.a} to="/product">Product</NavLink>
            </li>
            <li className={styles.li}>
                <NavLink className={styles.a} to="/pricing">Pricing</NavLink>
            </li>
            <li className={styles.li}>
                <NavLink className={styles.a} to="/login">Log In</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;
