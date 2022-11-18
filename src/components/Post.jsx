import styles from './Post.module.css'
export function Post(props){
    return (
        <div className={styles.post}>
            <h1 className={styles.author}>{ props.author }</h1>
            <p className={styles.content}>{ props.content }</p>
        </div>
    )
}