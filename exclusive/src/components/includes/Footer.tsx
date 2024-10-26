import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterMainContainer>
        <Container>
          <TopSection>
            <SubscribeSection>
              <Content>
                <SectionTitleMain>Exclusive</SectionTitleMain>
                <SectionSubtitle>Subscribe</SectionSubtitle>
                <OfferText>Get 10% off your first order</OfferText>
                <Form>
                  <InputField placeholder="Enter your email" />
                  <SendButton>
                    <SendIcon
                      src={
                        require("../../assets/images/icons/send.svg").default
                      }
                      alt="send-icon"
                    />
                  </SendButton>
                </Form>
              </Content>
            </SubscribeSection>

            <SupportSection>
              <Content>
                <SectionTitle>Support</SectionTitle>
                <ContactDetails>
                  <ContactItem>
                    111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                  </ContactItem>
                  <ContactItem>exclusive@gmail.com</ContactItem>
                  <ContactItem>+88015-88888-9999</ContactItem>
                </ContactDetails>
              </Content>
            </SupportSection>

            <AccountSection>
              <Content>
                <SectionTitle>Account</SectionTitle>
                <LinksList>
                  <LinkItem>My Account</LinkItem>
                  <LinkItem>Login / Register</LinkItem>
                  <LinkItem>Cart</LinkItem>
                  <LinkItem>Wishlist</LinkItem>
                  <LinkItem>Shop</LinkItem>
                </LinksList>
              </Content>
            </AccountSection>

            <QuickLinksSection>
              <Content>
                <SectionTitle>Quick Links</SectionTitle>
                <LinksList>
                  <LinkItem>Privacy Policy</LinkItem>
                  <LinkItem>Terms Of Use</LinkItem>
                  <LinkItem>FAQ</LinkItem>
                  <LinkItem>Contact</LinkItem>
                </LinksList>
              </Content>
            </QuickLinksSection>

            <DownloadSection>
              <Content>
                <SectionTitle>Download App</SectionTitle>
                <PromotionText>Save $3 with App New User Only</PromotionText>
                <DownloadOptions>
                  <QRCode>
                    <QRCodeImage
                      src={
                        require("../../assets/images/icons/QrCode.svg").default
                      }
                      alt=""
                    />
                  </QRCode>
                  <AppInstallers>
                    <GooglePlayButton>
                      <GooglePlayImage
                        src={
                          require("../../assets/images/icons/GooglePlay.svg")
                            .default
                        }
                        alt=""
                      />
                    </GooglePlayButton>
                    <AppStoreButton>
                      <AppStoreImage
                        src={
                          require("../../assets/images/icons/AppStore.svg")
                            .default
                        }
                        alt=""
                      />
                    </AppStoreButton>
                  </AppInstallers>
                </DownloadOptions>
                <SocialLinks>
                  <FacebookLink to={"https://www.facebook.com/"} target="blank">
                    <FacebookIcon
                      src={
                        require("../../assets/images/icons/facebook.svg")
                          .default
                      }
                      alt="facebook-icon"
                    />
                  </FacebookLink>
                  <TwitterLink to={"https://x.com/?lang=en"} target="blank">
                    <TwitterIcon
                      src={
                        require("../../assets/images/icons/twitter.svg").default
                      }
                      alt="twitter-icon"
                    />
                  </TwitterLink>
                  <InstagramLink
                    to={"https://www.instagram.com/"}
                    target="blank"
                  >
                    <InstagramIcon
                      src={
                        require("../../assets/images/icons/instagram.svg")
                          .default
                      }
                      alt="instagram-icon"
                    />
                  </InstagramLink>
                  <LinkedInLink to={"https://in.linkedin.com/"} target="blank">
                    <LinkedInIcon
                      src={
                        require("../../assets/images/icons/linkedin.svg")
                          .default
                      }
                      alt="linkedin-icon"
                    />
                  </LinkedInLink>
                </SocialLinks>
              </Content>
            </DownloadSection>
          </TopSection>

          <BottomSection>
            <FooterTextContainer>
              <CopyrightWrapper>
                <CopyrightIcon
                  src={
                    require("../../assets/images/icons/icon-copyright.svg")
                      .default
                  }
                  alt="copyright-icon"
                />
              </CopyrightWrapper>
              <FooterText>Copyright Rimel 2022. All right reserved</FooterText>
            </FooterTextContainer>
          </BottomSection>
        </Container>
      </FooterMainContainer>
    </>
  );
};

const FooterMainContainer = styled.footer`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
const Container = styled.div`
  max-width: 100%;
  width: 75%;
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 40px 0;

  @media (max-width: 1280px) {
    flex-wrap: wrap;
  }
  
  @media (max-width: 980px) {
    justify-content: normal;
    gap: 30px;
  }
`;
const SubscribeSection = styled.div`
  margin-bottom: 35px;
`;
const Content = styled.div``;
const SectionTitleMain = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;
const SectionSubtitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding: 24px 0px;
  cursor: pointer;
`;
const SectionTitle = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 24px;
  cursor: pointer;
`;
const OfferText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;
const Form = styled.form`
  padding: 7px 10px;
  border-radius: 4px;
  border: 1.5px solid #fff;
  margin: 16px 0;
`;
const InputField = styled.input`
  background: #000;
  color: #fafafa;
  border: none;
  font-size: 16px;
  font-weight: 400;
  outline: none;
`;
const SendButton = styled.button`
  border: none;
  background: #000;
  cursor: pointer;
`;
const SendIcon = styled.img``;

const SupportSection = styled.div`
  margin-bottom: 35px;
`;
const ContactDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ContactItem = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  &:nth-child(2) {
    padding: 18px 0;
  }
`;

const AccountSection = styled.div`
  margin-bottom: 35px;
`;
const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const LinkItem = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  &:nth-child(2) {
    padding: 18px 0;
  }

  &:nth-child(4) {
    padding: 18px 0;
  }
`;

const QuickLinksSection = styled.div`
  margin-bottom: 35px;
`;

const DownloadSection = styled.div`
  margin-bottom: 35px;
`;
const PromotionText = styled.p`
  color: #a9a9a9;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
`;
const DownloadOptions = styled.div`
  display: flex;
  gap: 13px;
  padding: 10px 0;
`;
const QRCode = styled.div`
  cursor: pointer;
`;
const QRCodeImage = styled.img``;
const AppInstallers = styled.div``;
const GooglePlayButton = styled.div`
  cursor: pointer;
`;
const GooglePlayImage = styled.img``;
const AppStoreButton = styled.div`
  cursor: pointer;
`;
const AppStoreImage = styled.img``;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 5px;
`;
const FacebookLink = styled(Link)``;
const TwitterLink = styled(Link)``;
const InstagramLink = styled(Link)``;
const LinkedInLink = styled(Link)``;

const FacebookIcon = styled.img``;
const TwitterIcon = styled.img``;
const InstagramIcon = styled.img``;
const LinkedInIcon = styled.img``;

const BottomSection = styled.div``;
const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 40px 0 20px 0;

  @media (max-width: 480px) {
    padding: 0 0 20px 0;
  }
`;
const CopyrightWrapper = styled.div`
  width: 20px;
  height: 20px;
`;
const CopyrightIcon = styled.img`
  display: block;
  width: 100%;
`;
const FooterText = styled.p`
  color: #696969;
  margin: 0;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default Footer;
