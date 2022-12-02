import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, content }){
    const [listaComentarios, setListaComentarios] = useState(() => {return []})
    const [comentario, setComentario] = useState(() => {return ''})

    function adicionarComentario(e){
        setListaComentarios(old => {return [...old, {author: author, content: comentario}] })
        e.preventDefault()
    }

    return (
        <article className={ styles.post }>
                <header>
                    <div className={ styles.author }>
                        <Avatar/>
                        <div className={ styles.authorInfo }>
                            <strong>Author</strong>
                            <span>Role</span>
                        </div>

                        <time title="">1h atrás</time>
                    </div >
                </header>

                <div className={ styles.content }>
                    conteudo do meu post...
                </div>

                <form action="" className={ styles.commentForm }>
                    <strong>Deixe seu feedback</strong>

                    <textarea name="comment" placeholder='Deixe um comentário' onChange={(evento) => {setComentario(evento.target.value)}}/>

                    <footer>
                        <button type='submit' onClick={adicionarComentario}>Publicar</button>
                    </footer>
                </form>
                {listaComentarios.map((c) => {
                    return <Comment author={c.author} content={c.content} />
                })}

        </article>
    )
}