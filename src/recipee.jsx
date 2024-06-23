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
        <Title>{details.title}</Title>
        <Image src={details.image} alt={details.title} />
      </div>
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
          <Content>
            <Paragraph dangerouslySetInnerHTML={{ __html: details.summary }}></Paragraph>
            <Paragraph dangerouslySetInnerHTML={{ __html: details.instructions }}></Paragraph>
          </Content>
        )}
        {activeTab === "ingredients" && (
          <IngredientsList>
            {details.extendedIngredients.map((ingredient) => (
              <Ingredient key={ingredient.id}>{ingredient.original}</Ingredient>
            ))}
          </IngredientsList>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    margin-left: 2rem;
    width: auto;
    text-align: left;
  }

  .active {
    background: linear-gradient(35deg, #484848, #313131);
    color: white;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  margin: 0.5rem 0;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #313131;
    color: white;
  }
  &.active {
    background: linear-gradient(35deg, #484848, #313131);
    color: white;
  }
  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const Content = styled.div`
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem 0;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const IngredientsList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const Ingredient = styled.li`
  font-size: 1rem;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default Recipee;
