import React, { useEffect, useState } from 'react'
import './detailPage.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function DetailPage() {

    const {id}=useParams()

    const [detail, setDetail] = useState()

    async function handleDetail() {
       const res= await axios.get(`http://localhost:3000/exampart1/${id}`)
       setDetail(res.data)
    }
    useEffect(() => {
     handleDetail()
    }, [])
    

  return (
    <div className='detailPage'>
        {
          detail ? 
       <>
       <div className="cart">
          <i className={detail.icon}></i>
          <p>{detail.name}</p>
          <span>{detail.comment}</span>
        </div>
       </>
          :""
        }
    </div>
  )
}

export default DetailPage