import styles from "./navbar.module.css"
import Image from "next/image";
import logo from "./../../app/images/logo.png"
import Button from "../button/button";



export default function Navbar() {
    return (
      <nav className={styles.navbar}>
        <Image className={styles.logo} src={logo} alt="text"/>
        <ul className={styles.nav_list}>
            <li><Button func={""} href={"google.com"} text={"Download CV"}></Button></li>
            <li className={styles.button_nav}><a href="www.google.com">Contact</a></li>
            <li className={styles.button_nav}><a href="www.google.com">Testimonials</a></li>
            <li className={styles.button_nav}><a href="www.google.com">Projects</a></li>
            <li className={styles.button_nav}><a href="www.google.com">Services</a></li>
            <li className={styles.button_nav}><a href="www.google.com">About Me</a></li>
            <li className={styles.button_nav}><a href="/">Home</a></li>

        </ul>
      </nav>
    );
  }
  