import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment(props, deleteComment) {

    function handleDeleteComment() {
        deleteComment(props);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/dfernella.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                            <strong> João juninho </strong>
                            <time title="14 de Maio às 14:09" dateTime="2024-05-14 14:09:30"> Cerca de 1h atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário"> 
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                   <button> 
                        <ThumbsUp />
                        Curtir <span> 24 </span>
                   </button>
                </footer>
            </div>
        </div>
    )
}