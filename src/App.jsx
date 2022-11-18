import { Post } from "../src/components/Post"
import { Header } from "../src/components/Header"
import { Sidebar } from "../src/components/Sidebar"
import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
    <div className={styles.wrapper}>
      <Sidebar />
      <Post  author = 'Miguel' content = 'Teste'/>
      <Post  author = 'Miguel' content = 'Teste'/>
      <Post  author = 'Miguel' content = 'Teste'/>
    </div>
    </div>
  )
}


//JSX - Javascript + HTML
//default exports vs named exports
// componente eh um arquivo q abstrai parte da interface eme outro arquivo e pode ser reaproveitado em outros momentos

//props infos q passamos para os components
//props recebem um objeto dos atributos passados a um comonent
// usar {}