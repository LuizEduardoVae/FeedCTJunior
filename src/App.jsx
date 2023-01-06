
import { Header } from "./Components/Header";
import { Post } from "./post";

import './Global.css';

export function App(){
  return(
    <div>
      <Header/>
      <Post
        author= "Luiz Eduardo"
        content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio quam, voluptates nihil excepturi amet, perferendis nesciunt cupiditate dolorem ab odio cum esse tenetur obcaecati facere libero magni earum distinctio"
      />
      <Post
        author= "Emanuely"
        content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio quam, voluptates nihil excepturi amet, perferendis nesciunt cupiditate dolorem ab odio cum esse tenetur obcaecati facere libero magni earum distinctio"
      />
    </div>
  )
}
