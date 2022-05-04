import NavItem from "../../components/navItem";
import styles from "./nav.module.scss";

const Nav = () => {
  const navArray = [
    "My RecipeTin",
    "Recipes",
    "By Category",
    "✨Special✨",
    "Collections",
    "About",
  ];

  return (
    <ul className={styles.nav_container}>
      {navArray.map((title) => {
        return <NavItem title={title} />;
      })}
    </ul>
  );
};

export default Nav;
