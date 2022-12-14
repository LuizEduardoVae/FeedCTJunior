
import axios, { Axios } from "axios";
import { Header } from "./Components/Header";
import { Post } from "./components/post";
import { Sidebar } from "./Components/Sidebar";

import './Global.css';
import style from './App.module.css'

export function App(){
  return(
    <div>
      <Header/>
      <div className={style.principal}>
        <Sidebar />
        <main>
          <Post
            author="Luiz Eduardo"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
          />
          <Post
            author="Luizao"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
