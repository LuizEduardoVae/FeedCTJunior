import styles from './Header.module.css'


export function Header() {
    return(
        <header className={styles.header}>
            <strong className={styles.title}>Kamikaze Feed</strong>
        </header>
        
    );
}