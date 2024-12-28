import React, { useContext, useEffect, useState } from 'react'
import './ourServicesSection.scss'
import axios from 'axios'
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { WishlistContext } from '../../context/wishlistContext';

function OurServicesSection() {
  const [product, setProduct] = useState([])

    const {wishlist, handleAddWishlist}=useContext(WishlistContext)

  async function axiosData() {
    const res = await axios.get("http://localhost:3000/exampart1")
    setProduct(res.data)
  }
  useEffect(() => {
    axiosData()
  }, [])

  return (
    <section id='ourServicesSection'>
      <div className="upBox">
        <div className="line"></div>
        <p>  What our students say</p>
      </div>
      <div className="downBox">
        {
          product && product.map((item) => (
<div className="cart">
          <i className={item.icon}></i>
          <Link style={{textDecoration:"none"}} to={`/detail/${item._id}`}>
          <p>{item.name}</p>
          </Link>
          <span>{item.comment}</span>
          <button onClick={()=>handleAddWishlist(item)}><FcLike /></button>
        </div>
            ))
        }
        
      </div>
    </section>

  )
}

export default OurServicesSection