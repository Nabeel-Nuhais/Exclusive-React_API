import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <>
      <SectionContainer>
        <ServicesWrapper>
          <ServiceItem>
            <ServiceContent>
              <IconWrapper>
                <SpanWrapper>
                  <ServiceIcon
                    src={
                      require("../../../../assets/images/icons/icon-delivery.svg")
                        .default
                    }
                    alt="truck-icon"
                  />
                </SpanWrapper>
              </IconWrapper>
              <ServiceTitle>FREE AND FAST DELIVERY</ServiceTitle>
              <ServiceDescription>
                Free delivery for all orders over $140
              </ServiceDescription>
            </ServiceContent>
          </ServiceItem>

          <ServiceItem>
            <ServiceContent>
              <IconWrapper>
                <SpanWrapper>
                  <ServiceIcon
                    src={
                      require("../../../../assets/images/icons/Icon-customer.svg")
                        .default
                    }
                    alt="headphone-icon"
                  />
                </SpanWrapper>
              </IconWrapper>
              <ServiceTitle>24/7 CUSTOMER SERVICE</ServiceTitle>
              <ServiceDescription>
                Friendly 24/7 customer support
              </ServiceDescription>
            </ServiceContent>
          </ServiceItem>

          <ServiceItem>
            <ServiceContent>
              <IconWrapper>
                <SpanWrapper>
                  <ServiceIcon
                    src={
                      require("../../../../assets/images/icons/Icon-secure.svg")
                        .default
                    }
                    alt="checked-icon"
                  />
                </SpanWrapper>
              </IconWrapper>
              <ServiceTitle>MONEY BACK GUARANTEE</ServiceTitle>
              <ServiceDescription>
                We return money within 30 days
              </ServiceDescription>
            </ServiceContent>
          </ServiceItem>
        </ServicesWrapper>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const ServicesWrapper = styled.div`
  max-width: 100%;
  width: 75%;
  display: flex;
  justify-content: space-around;
  padding: 50px 0 80px 0;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const ServiceItem = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    &&:nth-child(2) {
      margin: 0 30px;
    }
    &&:nth-child(3) {
      margin-top: 30px;
    }
  }

  @media (max-width: 701px) {
    &&:nth-child(2) {
      margin-top: 30px;
    }
  }

  @media (max-width: 480px) {
    &&:nth-child(2) {
      margin: 30px 0 0 0;
    }
  }
`;

const ServiceContent = styled.div``;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SpanWrapper = styled.span`
  display: flex;
  width: fit-content;
  border: 10px solid #c1c1c1;
  border-radius: 50%;
`;

const ServiceIcon = styled.img`
  border: 1px solid #000;
  background: #000;
  border-radius: 50%;
  padding: 7px;
`;

const ServiceTitle = styled.h3`
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding: 25px 0 10px 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ServiceDescription = styled.p`
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
`;

export default Services;
