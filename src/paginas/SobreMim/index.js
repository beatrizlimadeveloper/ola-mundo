import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
            Olá pessoal, eu sou a Beatriz Lima!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto da Beatriz Lima"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Uma paulistana de 30 anos que está se aventurando no mundo da programação. Atualmente, estou participando do projeto ONE da Oracle + Alura e estou focada em aprender tudo sobre Front-End. 
            </p>
            <p className={styles.paragrafo}>
            Meu sonho é trabalhar na área e me aprofundar ainda mais nos estudos, quem sabe até me especializar em algo específico.
            </p>
            <p className={styles.paragrafo}>
            Apesar de ser iniciante, tenho muita sede de conhecimento e estou sempre em busca de novas informações e desafios.
            </p>
            <p className={styles.paragrafo}>
            Fora do mundo da programação, gosto de passar meu tempo livre lendo livros, assistindo séries e filmes, e saindo com amigos. Ah, e não posso esquecer de mencionar que sou uma grande fã de música!
            </p>
            <p className={styles.paragrafo}>
            Então é isso, pessoal! Essa sou eu, uma aspirante a programadora que está pronta para encarar tudo o que a vida tem a oferecer.
            </p>
            <p className={styles.paragrafo}>
            Vamos juntos nessa jornada? Conto com vocês !
            </p>
        </PostModelo>
    )
}