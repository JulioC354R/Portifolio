import styles from "./apresentation.module.css"

export default function Apresentation () {
    return(
        <section className={styles.apresentation}>
            <div className={styles.text_conteiner}>
                <span className={styles.little_text}>Hi I am</span>
                <span className={styles.medium_text}>Júlio Herculano</span>
                <span className={styles.big_text1}>Full Stack</span>
                <span className={styles.big_text2}>Developer</span>
                <p className={styles.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus animi repudiandae cupiditate minima, accusamus voluptas voluptatem delectus excepturi maiores, tenetur obcaecati mollitia nam eaque tempore? Incidunt repudiandae facere libero doloribus.</p>
            </div>
            <div className={styles.img_conteiner}>

            </div>
        </section>
    )
}