import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'


export function Comment(){
    return(
        <div className={style.Comment}>
            <img src="https://media.licdn.com/dms/image/D4D03AQGOwGoPP4w5fQ/profile-displayphoto-shrink_400_400/0/1671835597632?e=1678320000&v=beta&t=79p9YC37460-8HmOwcJzETHbS960Y0Y-E3wQxQyWrEQ" />
            <div className={style.commentBox}>
                <div className={style.CommentContent}>
                    <header>
                        <div className={style.authorAndTime}>

                            <strong> Luiz Eduardo </strong>
                            <time title="09 de janeiro 2023" dateTime="2023-01-09 14:28:30"> Cerca de 1 hora atrás </time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p> 
                        Muito Bom, Devan, parabéns
                    </p>
                </div>
                <footer> 
                    <ThumbsUp/>
                    Aplaudir <span> 20 </span>
                </footer>
            </div>
        </div>
    )
}