import React from "react";
import { Button } from "../ButtonElements";
import { motion } from "framer-motion";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  variants,
} from "./InfoElements";
import WaveGreen from "../../../images/wave-green.svg";
import WaveBlack from "../../../images/wave-black.svg";
const InfoSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  primary,
  dark,
  dark2,
  second,
}) => {
  return (
    <>
      <Img
        lightBg={lightBg}
        src={WaveGreen}
        alt=""
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      />
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          last={true}
        >
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper second={second}>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="/home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <motion.img
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  src={img}
                  alt={alt}
                  second={second}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Img
        lightBg={lightBg}
        src={WaveBlack}
        alt=""
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      />
    </>
  );
};

export default InfoSection;
