import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { data } from '../../data/data'
import './Body.scss'

const Category = []

function Body() {
  const {item, setItem} = useContext(Context)

  data.forEach((e,i)=>{
    if(!Category.includes(e.type)){
    Category.push(e.type)
    }
  })

  const [cate, setCate] = useState(Category[0])
  console.log(cate);
  return (
    <div className='main'>
      <div className="main-header">
        <div className="header-inner">
          <div>
            <h2>Jaegar Resto</h2>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <div className='inputs'>
            <label htmlFor="search"><i className="bi bi-search"></i></label>
            <input type="text" id='search' placeholder='Search for food, coffe, etc..'/>
          </div>
        </div>
        <div className="header-category">
          {
            Category.map((e,i)=>(
              <button className={cate == e ? 'btnAct' : ''} onClick={()=> setCate(e)} key={i}>{e}</button>
            ))
          }
        </div>
      </div>
      <ul className="main-list">
        {
          data?.filter((f)=> f.type == cate).map((e,i)=>(
            <li onClick={()=> 
              {
                setItem([...new Set([...item, e])]);
                e.number = e.number ? e.number + 1 : 1;
              }
            } key={i} className="main-card">
              <img src={e.img} alt="img" />
              <h3>{e.title}</h3>
              <b>$ {e.price}</b>
              <span>Have {e.have}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Body