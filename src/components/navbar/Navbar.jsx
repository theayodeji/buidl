import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "./links/Links";
import styles from "./navbar.module.scss";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo} >
        <FontAwesomeIcon icon={faDiamond} fill={"#00b7ff"} width={50} />
        <h1 className="logo-txt">SKINTRADE</h1>
      </div>

      <div>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
