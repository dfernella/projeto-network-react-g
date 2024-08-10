import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/dfernella.png",
      name: "Daniel Fernella",
      role: "Developer",
    },
    content: [ 
      {type: "paragraph", content:"Hey guys"},
      {type: "paragraph", content: "talk guys, I’m going up one more project as a model for learning. Made with React in JavaScript."},
      {type: "paragraph", content: "Let’s create a working connection? Call me there!"},
      {type: "link", content: "github.com/dfernella"},

    ],
    publishedAt: new Date('2024-05-28 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/GabrielFernella.png",
      name: "Gabriel Fernella",
      role: "Developer",

    },
    content: [ 
      {type: "paragraph", content:"Fala galera"},
      {type: "paragraph", content: "Atualmente estou estudando para agregar meu repertório, Java e Golang."},
      {type: "paragraph", content: "Vamos fazer netowork para explorar juntos novos projetos com essas linguagens! "},
      {type: "link", content: "github.com/GabrielFernella"},

    ],
    publishedAt: new Date("2024-05-29 20:00:00"),
  },
];

export function App () {
  console.log("post", posts)
  return (
    <div> 

      <Header/>
    
      <div className= {styles.wrapper}> 
        <Sidebar />
        
      
        <main>
          {posts.map(post => {
            return  ( 
              <Post
                kei={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

