import { Chat } from "./components/Chat"
import Sidebar from "./components/Sidebar"

function App() {
  
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto">
        <div className="mx-auto flex space-x-2">
        <Chat />
        </div>
        <div className="mx-auto flex space-x-2">
        <Chat />
        </div>
        <div className="mx-auto flex space-x-2">
        <Chat />
        </div>
        <div className="mx-auto flex space-x-2">
        <Chat />
        </div>
      </div>
    </div>
    
  )
}

export default App
