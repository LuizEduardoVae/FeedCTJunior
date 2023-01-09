import { Comment } from './Comment'
import style from './post.module.css'



export function Post () {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://media.licdn.com/dms/image/D4D03AQGOwGoPP4w5fQ/profile-displayphoto-shrink_400_400/0/1671835597632?e=1678320000&v=beta&t=79p9YC37460-8HmOwcJzETHbS960Y0Y-E3wQxQyWrEQ"  />
                    <div style={style.authorInfo}>
                        <strong> Luiz Eduardo </strong>
                        <span> Front End Developer</span>
                    </div>
                </div>
                <time title="09 de janeiro 2023" dateTime="2023-01-09 14:28:30"> Publicado há 1 hora </time>
            </header>
            <div className={style.content}>

                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''> jane.design/doctorcare </a> </p>
                <p>
                    <a href=''> #novoprojeto </a>{' '}
                    <a href=''> #nlw </a>{' '}
                    <a href=''> #rocketseat </a>{' '}
                </p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                <Comment/>

            </div>
        </article>
    )
}