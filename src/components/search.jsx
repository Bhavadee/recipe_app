import {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler =(e)=>
        {
         e.preventDefault();
         navigate("/searched/"+input);
        };
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch />
        <input
        onChange={(e)=> setInput(e.target.value)}
        type="text"
        value={input}
         />
         
        </div>
       
    </FormStyle>
      
    
  )
}
const FormStyle = styled.form`
margin:0rem 10rem;
  @media (max-width: 768px) {
    margin: 0rem 2rem;
  }

  @media (max-width: 480px) {
    margin: 0rem 1rem;
  }


div{
position:relative;
width:100%;
}
input{
    border:none;
    background:linear-gradient(35deg,#484848, #313131);
    font-size:1rem;
    color:white;
    padding:1rem 2rem;
    border:none;
    border-radius: 1rem;
    outline:none;
    width:100%;
     @media (max-width: 480px) {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
     
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform: translate(100%, -50%);
    color:white;
}
`;

export default Search;
