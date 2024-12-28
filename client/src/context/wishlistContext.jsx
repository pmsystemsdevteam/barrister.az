import React, { createContext, useState } from 'react'

export const WishlistContext=createContext()
function WishlistProvider({children}) {

    const [wishlist, setWishlist] = useState([])

    function handleAddWishlist(item) {
        // const WishlistProduct=wishlist.find((item)=>item._id === x._id)
        // if (WishlistProduct) {
        //     return
        //     // setWishlist(wishlist.filter((item)=>item._id !== x._id))
        // }
        // else{
        setWishlist([...wishlist , item] )
        // }
    }

    function hadleDelete(id) {
        setWishlist(wishlist.filter((x)=>x._id !== id))
    }
    const data={
        handleAddWishlist,
        wishlist,
        hadleDelete
    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider