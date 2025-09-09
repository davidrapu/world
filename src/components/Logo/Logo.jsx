import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from './Logo.module.css'

function Logo() {
    return (
      <Link to="/">
        <img className={styles.img} src={logo} alt="Worldwise Logo" />
      </Link>
    );
}

export default Logo
