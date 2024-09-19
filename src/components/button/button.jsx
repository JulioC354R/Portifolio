import styles from "./button.module.css"
export default function Button ({func= "", href = "", text}) {
    return(
        <a className={styles.button} onClick={func}href={href}>{text}</a>
    )
}