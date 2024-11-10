import styles from './Footer.module.css'

const date = new Date()
const ano = date.getFullYear()

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Mini Blog &copy; {ano}</p>
    </footer>
  )
}

export default Footer