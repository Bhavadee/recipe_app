import {useEffect, useState } from "react";
import styled from "styled-components";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';
import { Link } from "react-router-dom";


function Vigge() {
  const [vigge, setVigge] = useState([]);
  useEffect(()=>{
    getVigge();
  },[])
  const getVigge = async()=>{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();
    setVigge(data.recipes);
    console.log(data.recipes);
  }
    return (
    <div>
     
    
        <Wrapper>
          <h3>Vegetarian Picks</h3>
          <Splide
           options={{
               perPage:3,
               breakpoints: {
                1024: {
                  perPage: 2,
                  gap: "2rem",
                },
                640: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
               arrows:false,
               pagination:false,
               drag:"free",
               gap:"5rem",
          }}
          >
          {vigge.map((recipe)=>{
            return(
              <SplideSlide key= {recipe.id}>
              <Card>
                <Link to={'/recipee/'+recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt="img"/> 
                <Gradient />
                </Link>
             </Card>
             
             </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
     

    </div>
    );
  }

  const Wrapper= styled.div`
  margin: 4rem 0rem;
 
  `;
  const Card = styled.div `
  min-height:15rem;
  border-radius:2rem;
  overflow: hidden;
  position:relative;
  
  img{
    border-radius:2rem;
    position: absolute;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:  center;
    font-weight:600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;
  const Gradient = styled.div`
  z-index:3;
  position:absolute;
  width:100%;
  height:100%;
  background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  `;


export default Vigge;
