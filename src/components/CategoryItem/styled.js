import styled from "styled-components";

export const Container = styled.div`
width: 80px;
height: 80px;
border: ${props=>props.active == props.id ? '#2C509F' : '#FFF'} solid 5px;
background-color: #FFF;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-right: 10px;
cursor: pointer;
transition: all ease .2s;
`;

export const CategoryImage = styled.img`
width: 55px;
height: 55px;
`;