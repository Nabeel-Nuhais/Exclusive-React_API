import React, { useState } from "react";
import styled from "styled-components";
import electronicsIcon from "../../../../assets/images/icons/electronics.svg";
import jeweleryIcon from "../../../../assets/images/icons/jewelry.svg";
import mensIcon from "../../../../assets/images/icons/mens.svg";
import womensIcon from "../../../../assets/images/icons/womens.svg";

interface CategoryProps {
  $active: boolean;
}

const categoryIcons = {
  electronics: electronicsIcon,
  jewelery: jeweleryIcon,
  "men's clothing": mensIcon, 
  "women's clothing": womensIcon, 
};
const normalizeCategory = (category: string): string => {
  switch (category.toLowerCase()) {
    case "mens":
    case "men's clothing":
      return "men's clothing";
    case "womens":
    case "women's clothing":
      return "women's clothing";
    case "jewelry":
    case "jewelery":
      return "jewelery";
    default:
      return category.toLowerCase();
  }
};
interface CategoriesProps {
  setSelectedCategory: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ setSelectedCategory }) => {

  const categoryItems = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedCategory(category);
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
                $active={activeCategory === category}
              >
                <WidthWrapper>
                <IconWrapper>
                  <GamingIcon
                    src={
                      categoryIcons[normalizeCategory(category)] ||
                      categoryIcons["electronics"]
                    }
                    alt={`${category}-icon`}
                  />
                </IconWrapper>
                </WidthWrapper>
                <CategoryName>{category}</CategoryName>
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
  width: 50px;
`;

const WidthWrapper = styled.div`
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
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 980px) {
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
  display: block;
  width: 100%;
  @media (max-width: 980px) {
    width: 38px;
  }
`;

export default Categories;
