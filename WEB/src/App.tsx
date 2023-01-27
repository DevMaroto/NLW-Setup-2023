import './styles/global.css';

import { Habit } from "./components/Habit"
function App() {
return (
  <div>
    <Habit completed={10}/>
    <Habit completed={15}/>
    <Habit completed={20}/>
    <Habit completed={25}/>
  </div>
  )
}

export default App

// Componente: Reaproveitar / isolar
//Propriedade: Uma informação enviada pra modificar um componente visual ou comportamentalmente
