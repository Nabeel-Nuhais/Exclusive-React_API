import React from "react";
import BgImage from "../../../../assets/images/iphone.jpg";
import styled from "styled-components";

const Spotlight = () => {
  return (
    <>
      <SpotlightSection>
        <ContentWrapper>
          <DetailsContainer>
            <HeaderSection>
              <CompanyLogoWrapper>
                <CompanyLogo
                  src={
                    require("../../../../assets/images/icons/apple.svg").default
                  }
                  alt="Apple Logo"
                />
              </CompanyLogoWrapper>
              <ProductSeries>
                <SeriesText>iPhone 14 Series</SeriesText>
              </ProductSeries>
            </HeaderSection>
            <OfferSection>
              <OfferInfo>
                Up to 10% <br /> off Voucher
              </OfferInfo>
            </OfferSection>
            <FooterSection>
              <ActionButton>
                <ButtonLabelUnderline>
                  <ButtonLabel>Shop Now</ButtonLabel>
                </ButtonLabelUnderline>
                <ButtonIconWrapper>
                  <ArrowIcon
                    src={
                      require("../../../../assets/images/icons/Vector.svg")
                        .default
                    }
                    alt="right-arrow"
                  />
                </ButtonIconWrapper>
              </ActionButton>
            </FooterSection>
          </DetailsContainer>
          <ImageContainer src={BgImage} alt="iphone-spotlight" />
        </ContentWrapper>
      </SpotlightSection>
    </>
  );
};

const SpotlightSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 40px 0;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 75%;
  background: #000;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 0 64px;

  @media (max-width: 1280px) {
    padding: 0 0 0 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyLogoWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const CompanyLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProductSeries = styled.div`
  margin-left: 16px;
`;

const SeriesText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin: 0;
`;

const OfferSection = styled.div`
  margin: 34px 0;

  @media (max-width: 980px) {
    margin: 15px 0;
  }
`;

const OfferInfo = styled.h3`
  font-size: 48px;
  margin: 0;
  font-weight: 600;
  color: #fff;

  @media (max-width: 980px) {
    font-size: 34px;
    margin: 25px 0;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    margin: 0;
  }
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: #fff;
`;

const ButtonLabelUnderline = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
`;

const ButtonLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
`;

const ButtonIconWrapper = styled.div`
  margin-left: 8px;
`;

const ArrowIcon = styled.img`
  display: block;
  width: 100%;
`;

const ImageContainer = styled.img`
  height: 453px;
  width: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;

  @media (max-width: 1280px) {
    height: 360px;
    background-size: cover;
  }

  @media (max-width: 980px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    height: 248px;
    background-size: contain;
    width: 100%;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    background-size: cover;
  }
`;

export default Spotlight;
