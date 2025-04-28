import { api } from './api/api'
import style from './Dragon.module.css'
import { useState, useEffect } from 'react'
import { Card } from './Components/Card'
import { Menu } from './Components/menu'

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
        </>
    )
}