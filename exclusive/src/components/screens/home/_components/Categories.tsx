import React, { useState } from "react";
import styled from "styled-components";

interface CategoryProps {
  $active: boolean;
}

const Categories = ({ categoryItems, handleCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
    handleCategoryChange(category.name);
  };

  return (
    <MainContainer>
      <CategorySectionWrapper>
        <CategoryHeader>
          <IconWrapper>
            <CategoryIcon
              src={
                require("../../../../assets/images/icons/rectangle.svg").default
              }
              alt="category-icon"
            />
          </IconWrapper>
          <CategoryLabel>Categories</CategoryLabel>
        </CategoryHeader>

        <CategoryTitle>
          <Heading>Browse By Category</Heading>
        </CategoryTitle>
        <CategoryItems>
          <ItemsGrid>
            {categoryItems.map((category, index) => (
              <CategoryItem
                key={index}
                onClick={() => handleCategoryClick(category)}
                $active={activeCategory === category.name}
              >
                <IconWrapper>
                  <GamingIcon
                    src={require(`../../../../assets/images/icons/${category.image}`)}
                    alt="gaming-icon"
                  />
                </IconWrapper>
                <CategoryName>{category.name}</CategoryName>
              </CategoryItem>
            ))}
          </ItemsGrid>
        </CategoryItems>
      </CategorySectionWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 50px 0;
`;

const CategorySectionWrapper = styled.div`
  width: 100%;
  max-width: 75%;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryIcon = styled.img``;

const CategoryLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #db4444;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CategoryTitle = styled.div`
  margin: 10px 0 25px 0;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CategoryItems = styled.div``;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryItem = styled.button<CategoryProps>`
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  display: inline-grid;
  justify-content: center;
  padding: 25px 0;
  gap: 10px;
  cursor: pointer;
  background: ${(props) => (props.$active ? "#f5f5f5" : "#fff")};

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 980px) {
    padding: 10px 0;
    gap: 5px;
  }
`;

const CategoryName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const GamingIcon = styled.img`
  @media (max-width: 980px) {
    width: 38px;
  }
`;

export default Categories;
