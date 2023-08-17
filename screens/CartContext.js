import React from "react";
import { createContext, useContext } from "react";



const Records = require("../mock_data.json");

const CartContext=createContext({

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
            const quantity=cartProducts.find(product => product.id ===  id)?.getProductQuantity
            
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

    const contextValue={
        item: [],
        getProductQuantity,
        addOnetoCart,
        removeOnefromCart,
        deletefromCart,
        getTotalCost,
    }

    return(
        <CartProvider value= {contextValue} >
            {children}
        </CartProvider>
    )

}






