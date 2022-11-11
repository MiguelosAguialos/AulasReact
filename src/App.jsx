import { Post } from "./Post"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Sidebar />
    </div>
  )
}


//JSX - Javascript + HTML
//default exports vs named exports
// componente eh um arquivo q abstrai parte da interface eme outro arquivo e pode ser reaproveitado em outros momentos

//props infos q passamos para os components
//props recebem um objeto dos atributos passados a um comonent
// usar {}