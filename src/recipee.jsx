import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import React from 'react';

function Recipee() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div>
        <Info>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          {activeTab === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <br />
              <br />
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </div>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .active {
    background: linear-gradient(35deg, #484848, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    max-width: 350px;
    border-radius: 2rem;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    font-size: 0.8rem;
  }
`;

const Info = styled.div`
  margin-left: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }

  p {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export default Recipee;
