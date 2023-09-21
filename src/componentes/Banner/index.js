import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundão !
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal ! Eu sou a Beatriz Lima, estudante de Front-end da Alura. Aqui vou compartilhar vários conhecimentos que estou tendo ao longo dessa jornada, espero que vocês aprendam algo novo juntinho comigo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto da Beatriz Lima"
                />
            </div>
        </div>
    )
}