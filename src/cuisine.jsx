import { useEffect, useState } from "react";
import styled from "styled-components";
//import {motion} from "framer-motion";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function Cuisine() {
   
    const [cuisine, setCuisine] = useState([""]);
    let params = useParams();
    const getCuisine = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    }
    useEffect(()=>{
        getCuisine(params.type);
      },[params.type]);
    
  return (
    <Grid>
      {cuisine.map((item) =>{
        return (
            <Link to={'/recipee/'+ item.id}>
            <Card key={item.id}>
                <img src={item.image} alt="ima"/>
                <h4>
                    {item.title}
                </h4>
            </Card>
            </Link>
        )
      })}
    </Grid>
  );
}

const Grid = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(10rem, 1fr));
grid-gap:3rem;
text-decoration :none;
`;
const Card = styled.div`
img{
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration :none;
}
h4{
    text-align:center;
    padding:1rem;
   color:black;
}
`;


export default Cuisine;
