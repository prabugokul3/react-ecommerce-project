import React, { createContext } from 'react';
import useLocalStorage from './useLocalStorage';

const AuthContext = createContext(null);
const { Provider }: any = AuthContext;

function AuthProvider({ children }: any) {
    const [cartInfo, setCartInfo] = useLocalStorage("cartProduct", [], "json");

    const readData = async (key: any) => {
        try {
          if (key === 'cartProduct') {
            return cartInfo;
          } 
        } catch (e) {
          console.log(e);
          console.log('Failed to save the data to the storage')
        }
      }
    const addToCart = (product: any, quantity: any) => {
        if (product) {
            const updatedCart = [...cartInfo];
            const index = updatedCart.findIndex(item => item.id === product.id);

            if (index !== -1) {
                updatedCart[index].quantity = quantity
                updatedCart[index].totalPrice = updatedCart[index].price * updatedCart[index].quantity;
            } else {
                product.quantity = quantity
                product.totalPrice = product.price * product.quantity
            }
            console.log(updatedCart)
            setCartInfo(updatedCart)
        }
    }

    const removeCart = (product: any, quantity: any) => {
        if (product) {
            const updatedCart = [...cartInfo];
            const index = updatedCart.findIndex(item => item.id === product.id);

            if (index !== -1) {
                updatedCart[index].quantity = quantity
                updatedCart[index].totalPrice = updatedCart[index].price * quantity;
            }
        }
    }

    return (
        <Provider value={{ addToCart, removeCart,cartInfo,readData }}>{children}</Provider>
    );
}
export { AuthContext, AuthProvider };