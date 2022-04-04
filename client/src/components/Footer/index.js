import React from "react";
import { FaFacebook } from "react-icons/fa";
import iitr from "../../images/IITR175.png";

import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  Img,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper></FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/">Leetcode</SocialLogo> */}
            <Img src={iitr}></Img>
            <WebsiteRights>
              Copyright © {new Date().getFullYear()} | LeetCode
            </WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink href="/" target="_black" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_black" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_black" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_black" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons> */}
            <FooterLinkItems>
              <FooterLinkTitle>
                Made with by &#128151; Students @IITR
              </FooterLinkTitle>
              <FooterLink to="/team">Meet the team</FooterLink>
            </FooterLinkItems>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
