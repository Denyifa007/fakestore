import React from 'react'

const Cart = ({cartItem, setCartItems}) => {
  return (
    <div>
        <div>
        {cartItem.length === 0 &&(
            <div>
                <h3>Empty Cart</h3>
            </div>
        )}
        </div>
        <div>
        {cartItem.map((singleItem)=>{
            const{image,id,title,price,quantity} = singleItem
            return(
                <div>
                    <img src={image} alt="" />
                </div>


            )
        })}
        </div>
      
    </div>
  )
}

export default Cart