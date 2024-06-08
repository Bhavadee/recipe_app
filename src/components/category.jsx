import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks, GiOpenedFoodCan } from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import React from 'react'

function Category() {
  return (
    <List>
         <Slink to ={'/cuisine/Indian'}>
        <GiOpenedFoodCan />
        <h4>India</h4>
      </Slink>
      <Slink to ={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to ={'/cuisine/American'}>
        <FaHamburger />
        <h4>Amercian</h4>
      </Slink >
      <Slink to ={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to ={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japan</h4>
      </Slink>
    </List>
  )
}

const List=styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem
`;
const Slink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:1rem;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
width:4rem;
height:4rem;
cursor:pointer;
transform:scale(0.8);

h4{
    color:white;
    font-size:0.5rem;
}
svg
{
    color:white;
    font-size:1rem;
}

&.active{
    background:linear-gradient(35deg,#f27121,red);
    h4{
        color:white; 
    }
    svg
    {
        color:white;
    }

}


`;
export default Category;
