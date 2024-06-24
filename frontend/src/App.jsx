import { useState } from "react"; // Importa a função useState do React
import "./App.css"; // Importa o arquivo de estilos CSS

import AuthPage from "./AuthPage"; // Importa o componente AuthPage
import ChatsPage from "./ChatsPage"; // Importa o componente ChatsPage

function App() {
  const [user, setUser] = useState(undefined); // Declara um estado chamado "user" com valor inicial undefined

  if (!user) { // Se "user" não está definido (ou seja, o usuário não está autenticado)
    return <AuthPage onAuth={(user) => setUser(user)} />; // Renderiza o componente AuthPage, passando uma função que define o usuário como prop
  } else { // Se "user" está definido (ou seja, o usuário está autenticado)
    return <ChatsPage user={user} />; // Renderiza o componente ChatsPage, passando o usuário como prop
  }
}

export default App; // Exporta o componente App como padrão


