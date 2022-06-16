import React from "react";
import { CartArea, CartBody, CartHeader, CartText, CartIcon } from './styled.js';

export default () => {
    return (
        <CartArea>
            <CartHeader>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho (x)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    )
}