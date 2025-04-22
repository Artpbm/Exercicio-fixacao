import { useState } from 'react'
import style from './App.module.css'
import { Menu } from './Components/menu'
import logo from './assets/images/dragonball.jpg'



function App() {
  const [textoBotao, setTextoBotao] = useState(false)
  const [textoBotao2, setTextoBotao2] = useState(false)

  return (
    <>
    <Menu op1='Renderização condicional' op2='Dragon ball' />
        <div>
          <div className={style.first}>
            <img src={logo} alt="logo" className={style.logo} />
            <button onClick={() => {setTextoBotao(true)}} >Clique aqui</button>
            {textoBotao &&  <button onClick={() => {setTextoBotao2(true)}} >Ver o vídeo</button>}
            {textoBotao2 && (
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VrSxfMUiS7s?si=CLI5LUNHQzTcIkOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )}
          </div>
        </div>
     
    </>
  )
}

export default App
