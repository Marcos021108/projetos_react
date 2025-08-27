import styles from './DigaMeuNome.module.css'
function DigaMeuNome(props){
    return(
        <div className={styles.container}>
            <p className={styles.paragrafo}>Olá {props.nome}, seja bem vindo ao meu site!</p>
        </div>
    )
}
export default DigaMeuNome