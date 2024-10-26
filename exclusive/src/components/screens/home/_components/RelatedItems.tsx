import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import threeStar from "../../../../assets/images/icons/three-star.svg";
import fourStar from "../../../../assets/images/icons/four-star.svg";
import fourHalfStar from "../../../../assets/images/icons/four-half-star.svg";
import fiveStar from "../../../../assets/images/icons/five-star.svg";

interface Product {
  id: string;
  title: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  price: string;
}

interface RelatedItemsProps {
  products: Product[];
}

const RelatedItems: React.FC<RelatedItemsProps> = ({ products }) => {
  const getStarIcon = (rating) => {
    if (rating >= 5) return fiveStar;
    if (rating >= 4.5) return fourHalfStar;
    if (rating >= 3) return fourStar;
    return threeStar;
  };

  const limitedProducts = products.slice(0, 4);

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
          <CategoryLabel>Related Item</CategoryLabel>
        </CategoryHeader>

        <ProductContainer>
          {limitedProducts.map((product) => (
            <ProductContent key={product.id}>
              <TopContainer to={`/product/${product.id}`}>
                <ProductImageWrapper>
                  <ProductImage src={product.image} alt={product.title} />
                </ProductImageWrapper>
                <TopRightContainer>
                  <LikeIconWrapper>
                    <LikeIcon
                      src={
                        require("../../../../assets/images/icons/heart.svg")
                          .default
                      }
                      alt="like-icon"
                    />
                  </LikeIconWrapper>
                  <ViewIconWrapper>
                    <ViewIcon
                      src={
                        require("../../../../assets/images/icons/view.svg")
                          .default
                      }
                      alt="view-icon"
                    />
                  </ViewIconWrapper>
                </TopRightContainer>
                <AddToCartButton>Add To Cart</AddToCartButton>
              </TopContainer>

              <ProductDetails>
                <ProductName>{product.title}</ProductName>
                <PriceAndRatingContainer>
                  <StarRatingWrapper>
                    <StarIcon
                      src={getStarIcon(product.rating.rate)}
                      alt="star-icon"
                    />
                  </StarRatingWrapper>
                  <RatingCount>({product.rating.count})</RatingCount>
                </PriceAndRatingContainer>
              </ProductDetails>
            </ProductContent>
          ))}
        </ProductContainer>
      </CategorySectionWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CategorySectionWrapper = styled.div`
  width: 100%;
  max-width: 75%;
`;

const AddToCartButton = styled.button`
  background: #000;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  bottom: 0px;
  width: 100%;
`;

const TopContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  border: 1px solid #000;
  padding: 30px 0;
  background: #fff;
  border-radius: 4px;
  height: 60%;
  cursor: pointer;
  position: relative;

  &:hover ${AddToCartButton} {
    opacity: 1;
  }

  @media (max-width: 1280px) {
    padding: 15px 0;
  }
`;

const TopRightContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const LikeIconWrapper = styled.div`
  cursor: pointer;
`;

const LikeIcon = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
`;

const ViewIconWrapper = styled.div`
  cursor: pointer;
`;

const ViewIcon = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  border-bottom: 1px solid #b3b3b3;
  padding-bottom: 30px;

  @media (max-width: 1536px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductContent = styled.div`
  margin-bottom: 25px;

  @media (max-width: 540px) {
    &&:first-child {
      margin-bottom: 0;
    }
  }
`;

const ProductImageWrapper = styled.div`
  align-self: center;
  width: 115px;
  height: 150px;
  display: flex;
`;

const ProductImage = styled.img`
  width: 100%;
  display: block;

  @media (max-width: 980px) {
    width: 95px;
  }
`;

const ProductDetails = styled.div``;

const ProductName = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #000;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const PriceAndRatingContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const StarRatingWrapper = styled.div``;

const StarIcon = styled.img``;

const RatingCount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 40px 0px 50px;
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
`;
export default RelatedItems;
