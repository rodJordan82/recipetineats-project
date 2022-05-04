import styles from "./NavItem.module.scss";

const NavItem = (props) => {
  return (
    <li className={styles.nav}>
      <a className={styles.nav__link} href="/#">
        {props.title}
      </a>
    </li>
  );
};

export default NavItem;
