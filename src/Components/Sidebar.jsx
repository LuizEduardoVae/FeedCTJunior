import {PencilLine} from 'phosphor-react'
import style from '../Components/Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={style.sidebar}> 
            <img className={style.cover} src="https://images.unsplash.com/photo-1610123598147-f632aa18b275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
            alt="" />

            <div className={style.perfil}>
                <img src="https://media.licdn.com/dms/image/D4D03AQGOwGoPP4w5fQ/profile-displayphoto-shrink_400_400/0/1671835597632?e=1678320000&v=beta&t=79p9YC37460-8HmOwcJzETHbS960Y0Y-E3wQxQyWrEQ"  />
                <strong> Luiz Eduardo Vedoato </strong>
                <span>Web Developer</span>

            </div>
            <footer>
                <a href="#">
                   <PencilLine size={20}></PencilLine>
                    Edite seu perfil
                </a>
            </footer>

        </aside>
    )
}