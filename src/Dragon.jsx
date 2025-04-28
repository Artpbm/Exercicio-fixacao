import { api } from './api/api'
import style from './Dragon.module.css'
import { useState, useEffect } from 'react'
import { Card } from './Components/Card'
import { Menu } from './Components/menu'

import logo from './assets/images/dragonball.jpg'
import Facebook from './assets/images/facebook.png'
import Twitter from './assets/images/twitter.png'
import Youtube from './assets/images/youtube.png'

export default function Dragon(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [showInfo, setShowInfo] = useState(false);
    const [erro, setErro] = useState(false)

    useEffect(() => {

        api.get(`/characters?page=${page}`).then((res) => {
            setData(res.data.items)
        }).catch((error) => {
            console.log(error)
            setErro(true)
        })
    }, [page])

    console.log(data)

    return(
        <>
        <Menu op1='Voltar'/>
        <section className={style.wrapPage}>
            <input  className={style.wrapInput} type="text" placeholder='digite uma página (1/6)' value={page} onChange={(e) => setPage(e.target.value)} />
            <br />
            {erro && <p>Página não encontrada</p>}

            <div className={style.wrapCard}>
                {data.map((item, index) => {
                    return(
                        <div key={index}>
                        <Card name={item.name} image={item.image}  race={item.race} gender={item.gender} ki={item.ki} maxKi={item.maxKi} affiliation={item.affiliation} description={item.description}/>
                    </div>
                    )
                })}
            </div>
        </section>
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