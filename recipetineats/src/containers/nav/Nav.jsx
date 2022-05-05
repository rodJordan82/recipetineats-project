import NavItem from "../../components/navItem";
import styles from "./nav.module.scss";

const Nav = () => {
  const navArray = [
    {
      title: "My RecipeTin",
    },
    {
      title: "Recipes",
    },
    {
      title: "By Category",
      subMenu: [
        "Mains",
        "Quick and Easy",
        "Soups",
        "One Pot",
        "Stews",
        "Slow Cooker",
        "Sides",
        "Pasta",
        "Sweet",
        "Cuisine",
        "dietary",
        "Other",
      ],
    },
    {
      title: "✨Special✨",
    },
    {
      title: "Collections",
    },
    {
      title: "About",
    },
  ];

  return (
    <ul className={styles.nav_container}>
      {navArray.map((object) => {
        return <NavItem props={object} />;
      })}
    </ul>
  );
};

export default Nav;
