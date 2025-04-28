import { useState } from 'react'
import style from './App.module.css'
import { Menu } from './Components/menu'

import logo from './assets/images/dragonball.jpg'
import Facebook from './assets/images/facebook.png'
import Twitter from './assets/images/twitter.png'
import Youtube from './assets/images/youtube.png'

function App() {
  const [textoBotao, setTextoBotao] = useState(false)
  const [textoBotao2, setTextoBotao2] = useState(false)

  return (
    <>
    <Menu op1='Vídeo' op2='Dragon ball' />
        <div>
          <div className={style.first}>
            <img src={logo} alt="logo" className={style.logo} />

            <div className={style.wrapInfo}></div>
            <p className={style.text}>
            Dragon Ball é uma das franquias de anime e mangá mais famosas do mundo, criada por 
            Akira Toriyama em 1984. A história acompanha Goku, um jovem de coração puro com habilidades extraordinárias, 
            em sua busca pelas lendárias Esferas do Dragão, que podem realizar qualquer desejo. Ao longo de sua jornada, 
            Goku enfrenta inimigos poderosos, faz amizades marcantes e descobre suas origens como um Saiyajin, uma raça guerreira.
            Misturando artes marciais, aventura e batalhas épicas, Dragon Ball conquistou gerações, 
            sendo um dos pilares da cultura pop japonesa e inspirando inúmeros outros animes e jogos.
            </p>

            <button  className={style.buttDb} onClick={() => {setTextoBotao(true)}} >Clique aqui</button>
            <div className={style.vContainer}>
            {textoBotao &&  <button className={style.vbutt} onClick={() => {setTextoBotao2(true)}} >Ver o vídeo</button>}
            {textoBotao2 && (
              <div className={style.videoW}>
              <iframe width="500" height="350" 
              src="https://www.youtube.com/embed/VrSxfMUiS7s?si=CLI5LUNHQzTcIkOE" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            )}
            </div>
          </div>
        </div>

        <footer className={style.footer}>
       <p>© 2025 Arthur Palacio Barbosa Moulepes. Todos os direitos reservados.</p>
      <div className={style.footerIcons}>
      <a href="https://www.facebook.com/groups/dbkamepostagem">
      <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://x.com/db_official_en">
      <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.youtube.com/watch?v=2nYozPLpJRE&list=PL6EC7B047181AD013">
      <img src={Youtube} alt="Youtube" />
      </a>
    </div>
</footer>
    </>
  )
}

export default App
