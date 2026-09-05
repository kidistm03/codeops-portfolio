import {
    createContext,
    useMemo,
    useReducer
} from "react";

import { cartReducer } from "./cartReducer";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [items, dispatch] = useReducer(
        cartReducer,
        []
    );

    const total = items.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    const itemCount = items.reduce(
        (sum, item) =>
            sum + item.quantity,
        0
    );

    const value = useMemo(
        () => ({
            items,
            dispatch,
            total,
            itemCount
        }),
        [items, total, itemCount]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;