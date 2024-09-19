import styles from "./navbar.module.css"

export default function Navbar() {
    return (
      <nav class={styles.navbar}>
        <ul class={styles.nav_list}>
            <li class={styles.download_cv}><a href="www.google.com">Download CV</a></li>
            <li class={styles.button_nav}><a href="www.google.com">Contact</a></li>
            <li class={styles.button_nav}><a href="www.google.com">Testimonials</a></li>
            <li class={styles.button_nav}><a href="www.google.com">Projects</a></li>
            <li class={styles.button_nav}><a href="www.google.com">Services</a></li>
            <li class={styles.button_nav}><a href="www.google.com">About Me</a></li>
            <li class={styles.button_nav}><a href="/">Home</a></li>

        </ul>
      </nav>
    );
  }
  