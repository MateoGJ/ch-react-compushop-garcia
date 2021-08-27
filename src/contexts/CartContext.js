import React, { useState } from 'react';

const CartContext = React.createContext({
  items: {},
  setItems: (items) => {}
});

function CartProvider({ defaultValue = {}, children }) {

    const [ items, setItems ] = useState(defaultValue);

    function addItem(item, quantity) {
        if(isInCart(item.id)) {
            items[item.id] = items[item.id].quantity + quantity;
        } else {
            items[item.id] = {producto: item, quantity};
        }
    }

    function removeItem(item) {
        const _items = {};
        Object.entries(items).forEach(([key, _item]) => {
            if(key != item.producto.id) {
                _items[key] = {
                    producto: _item.producto,
                    quantity: _item.quantity
                };
            }
        });
        setItems(_items);
    }

    function clear() {
        setItems({});
    }

    function isInCart(id) {
       const hasId = items[id] ? true : false; 
       return hasId;
    }

    return (<CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart }}>
        { children }
    </CartContext.Provider>);

}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('Cart context no esta definido');
  }
  return context;
}

export { CartProvider, useCart };
