import React from "react";
import { Container,
    ProductButtonArea,
    ProductPhotoArea,
    ProductInfoArea,
    ProductName,
    ProductPhoto,
    ProductPrice,
    ProductIngredients,
    ProductButton
 } from './styled';

export default ({data}) => {
    return (
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>

    );
}
