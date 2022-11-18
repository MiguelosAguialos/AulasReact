import feedLogo from '../assets/chat-de-voz.png'
import styles from './Header.module.css'
export function Header() {

    return <header className = {styles.header}>
        <strong>MiguelosAguialos Feed</strong>
        <img src={ feedLogo } alt="Feed Logo" />
    </header>
}