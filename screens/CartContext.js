import React from "react";
import { createContext, useContext, useState } from "react";

const Records = require("../mock_data.json");

export const CartContext=createContext({
    item:[],
    getProductQuantity: () => {},
    addOnetoCart:()=>{}, 
    removeOnefromCart:() =>{},
    deletefromCart:()=>{},
    getTotalCost:() =>{},
});

export function CartProvider({children}){
    const [cartProducts, setCartProducts]=useState([]);

    function getProductQuantity(id){
        const quantity=cartProducts.find(product => product.id ===  id)?.quantity
        
        if(quantity==undefined){
            return 0;
        }
        return quantity;   
    }

    function addOnetoCart(id){
        const quantity=getProductQuantity(id); 
        
        if(quantity==0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id:id,
                        quantity:1
                    }
                ]
            )
        }else{
            setCartProducts(
                cartProducts.map(
                    product=>
                    product.id ===id
                    ?{...product, quantity: product.quantity+1}
                    :   product
                )
            )
        }
    }

    function removeOnefromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity == 1) {
            deletefromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(product =>
                    product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
            );
        }
    }

    function deletefromCart(id) {
        setCartProducts(
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        );
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = Records.data.find(product => product.id === cartItem.id);
            if (productData) {
                totalCost += (parseInt(productData.priceN) * cartItem.quantity);
            }
        });
        return totalCost;
    }

    const contextValue={
        item: cartProducts,
        getProductQuantity,
        addOnetoCart,
        removeOnefromCart,
        deletefromCart,
        getTotalCost,
    }

    return(
        <CartContext.Provider value= {contextValue} >
            {children}
        </CartContext.Provider>
    )
}
