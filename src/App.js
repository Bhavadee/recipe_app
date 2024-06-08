import React from 'react';
import Pages from './pages';
import Category from './components/category';
import Search from './components/search';
import {BrowserRouter} from 'react-router-dom';
import {GiKnifeFork} from "react-icons/gi";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>YUMMYYY</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)
 `text-decoration:none;
 font-size:1rem;
 font-weight:400;
 
`;
const Nav = styled.div `
padding:2.3rem 0rem;
display: flex;
justify-content: flex-start;
align-items:center;

svg{
  font-size:1.3rem;

}
`;

export default App;
