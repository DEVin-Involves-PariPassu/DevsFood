import React, {useState, useEffect} from "react";
import { Container,
    ProductArea,
    ProductButtons,
    ProductDetails,
    ProductPhoto,
    ProductInfoArea,
    ProductQuantityArea,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductPrice,
    ProductQtImage,
    ProductQtText
} from "./styled";

export default ({ data, setStatus }) => {
    const [qt, setQt] = useState(1);

    useEffect(()=>{
        setQt(1);
    }, [data]);

    const handleCancelButton = () => {
        setStatus(false);
    }
    const handleMinusQt = () =>{
        if(qt > 1){
            setQt(qt - 1);
        }
    }
    const handlePlusQt= () =>{
        setQt(qt + 1);
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image}/>
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                        
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage src="/assets/minus.png" onClick={handleMinusQt}></ProductQtImage>
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage src="/assets/plus.png" onClick={handlePlusQt}></ProductQtImage>
                        </ProductQuantity>
                        <ProductPrice>R$ {data.price * qt}</ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>

                
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar </ProductButton>
                <ProductButton>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}