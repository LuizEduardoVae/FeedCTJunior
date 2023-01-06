import styles from './Header.module.css'
import CTlogo from '../IMG/CTLOGO.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={CTlogo}></img>
            <strong>Kamikaze Feed</strong>
        </header>
        
    );
}