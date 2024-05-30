"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, CircleChevronLeft } from "lucide-react";
import styles from "./navbar.module.css"; // Import the CSS module file
import Link from "next/link";  // Import the Link component from next/link

const links = [
  { route: "/", name: "Home" },
  { route: "/blogs", name: "Blogs" },
  { route: "/contact", name: "Contact" },
  { route: "/signup", name: "Sign Up" },
  { route: "/login", name: "Login" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Image
          src="/Logo.png"
          alt="logo"
          height={20}
          width={90}
          className={styles.logoImage}
        />
      </div>
      <ul className={styles.navLinks}>
        {links.map((item) => (
          <li
            key={item.route}
            className={`${styles.navLinkItem} ${
              pathname === item.route && styles.activeNavLink
            }`}
          >
            <a href={item.route}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
        />
        <Search size={17} className={styles.searchIcon} />
      </div>

      <div className={styles.menuIcon}>
        <CircleChevronLeft size={17} className={styles.menuIconSvg} />
      </div>
    </div>
  );
};

export default Navbar;

