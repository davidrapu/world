import styles from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <nav className={styles.navBar}>
        <Logo />
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
