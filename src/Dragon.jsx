import { api } from './api/api'
import style from './Dragon.module.css'
import { useState, useEffect } from 'react'
import { Card } from './Components/Card'

export default function Dragon(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("1")
    
    const [erro, setErro] = useState(false)

    useEffect(() => {

        api.get(`/characters?page=1`).then((res) => {
            setData(res.data.items)
        }).catch((error) => {
            console.log(error)
            setErro(true)
        })
    }, [page])

    console.log(data)

    return(
        <section className={style.wrapPage}>
            <h1 className={style.titlename}>Dragon Ball super</h1>
            <input type="text" placeholder='digite uma página (1/5)' value={page} onChange={(e) => setPage(e.target.value)} />
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
    )
}