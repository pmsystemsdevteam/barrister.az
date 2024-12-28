import React, { useContext } from 'react'
import './wishlistPage.scss'
import { Helmet } from "react-helmet";
import { WishlistContext } from '../../context/wishlistContext';


function WishlistPage() {
  const { wishlist } = useContext(WishlistContext)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      <div className="wishlistCart">
        {wishlist && wishlist.map((item)=>(
         <p> {item.name}</p>
        ))}
      </div>
    </>
  )
}

export default WishlistPage