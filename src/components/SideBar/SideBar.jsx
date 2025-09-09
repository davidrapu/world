import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <section className={styles.sidebar}>
      <Logo />
      <ul>
        <li>
          <NavLink
            to="cities"
            className={({ isActive }) => (
              isActive ? styles.active : "")}
          >
            CITIES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            COUNTRIES
          </NavLink>
        </li>
      </ul>
      <div className="data">
        <Outlet />
      </div>
    </section>
  );
}

export default SideBar;
