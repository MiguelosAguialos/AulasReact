import * as Icon from 'phosphor-react';
import {CgProfile} from 'react-icons/cg';
import styles from './Sidebar.module.css'
export function Sidebar(){
    return (
        <div className={styles.sidebar}>
            <img className={styles.cover} src="../src/assets/cover.jpg" />

            <div className={styles.profile}>
                <img src="https://github.com/MiguelosAguialos.png" />
                <strong>Miguel Aguiar</strong>
                <span>Web Developer</span>
            </div>
 
            <footer className={styles.sidebar.footer}>
                <a target="_blanck" href="https://github.com/MiguelosAguialos">
                    <CgProfile size="24px"/>
                    Editar seu perfil
                </a>
            </footer>
        </div>
    );
}