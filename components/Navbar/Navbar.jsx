import styles from "@styles/Navbar.module.scss";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={`${styles.Navbar}`}>
      <div className={`${styles.NavbarInner}`}>
        <div className={`${styles.LogoText} fade-in`}>
          <Link href='/'>ANS Creative</Link>
        </div>
        <div className={`${styles.NavlistWrapper}`}>
          <ul className={`${styles.Navlist}`}>
            <li className={`${styles.NavItem} fade-in`}>
              <Link href='/#projects'>Work</Link>
            </li>
            {/* <li className={`${styles.NavItem} fade-in`}>
              <Link href='/about'>About</Link>
            </li> */}
            <li className={`${styles.NavItem} fade-in`}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.Burger}>
          <div className={styles.BurgerInner}></div>
        </div>
      </div>
    </nav>
  );
};
