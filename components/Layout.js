import Nav from "./Nav.js";
import styles from "../styles/Home.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
