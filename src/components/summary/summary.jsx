import image2 from "./../../images/foto2.jpg"
import Image from "next/image"
import styles from "./summary.module.css"
import SkillBar from "../skillBar/skillBar"

export default function Summary(){
    return(
        <div className={styles.conteiner}>
            <Image className={styles.imageConteiner} src={image2} alt="SumaryImage" ></Image>
            <div>
                <span className={styles.summaryTittle}>Summary</span>
                <p  className={styles.summaryText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus harum magnam, ducimus doloremque esse quas mollitia dicta culpa est quae sed laborum commodi! Ad, atque numquam quidem eos esse earum</p>
                <div>
                    <SkillBar proefiencyLevel={80} skillName={"Python"} />
                    <SkillBar proefiencyLevel={80} skillName={"Python"} />
                    <SkillBar proefiencyLevel={80} skillName={"Python"} />
                    <SkillBar proefiencyLevel={80} skillName={"Python"} />

                </div>
            </div>
        </div>
    )
}