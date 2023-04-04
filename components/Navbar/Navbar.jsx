import styles from "@styles/Navbar.module.scss";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.Navbar} ${menuOpen ? styles.Open : ""}`}>
      <div className={`${styles.NavbarInner}`}>
        <div className={`${styles.LogoText} fade-in`}>
          <Link href='/'>ANS Creative</Link>
        </div>
        <div className={`${styles.NavlistWrapper}`}>
          <ul className={`${styles.Navlist} ${menuOpen ? styles.Open : ""}`}>
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
        <div
          className={`${styles.Burger} ${menuOpen ? styles.Open : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
