import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
              <FooterLink to="/sigin">XYZ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Leetcode</SocialLogo>
            <WebsiteRights>
              Copyright © {new Date().getFullYear()} | LeetCode
            </WebsiteRights>
            <SocialIcons>
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
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
