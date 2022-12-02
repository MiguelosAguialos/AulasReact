import { ThumbsUp, Trash } from "phosphor-react";
import styles from './Comment.module.css';
import { Avatar } from "./Avatar";

export function Comment({ author, content}){
    return(
        <div className={styles.comment}>
            <Avatar/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                {author}
                            </strong>
                            {/* <time title="">Cerca de 30min atrás<time/> */}

                        </div>
                        <button>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}