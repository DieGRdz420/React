import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';

const AllRoutes = ({ 
    productItems, 
    cartItems, 
    handleAddProduct, 
    handleRemoveProduct, 
    handleCartClearance }) => {
  return (
    <div> 
        <Routes>
            <Route path='/' element={ 
              <Products 
                productItems={ productItems } 
                handleAddProduct={ handleAddProduct }  />
            }/>
            <Route path='/signup' element={ <Signup /> } />
            <Route path='/cart' element={ 
              <Cart  
                cartItems={ cartItems } 
                handleAddProduct={ handleAddProduct } 
                handleRemoveProduct={ handleRemoveProduct }
                handleCartClearance={handleCartClearance} /> 
            }/>
        </Routes>
    </div>
  )
}

export default AllRoutes;