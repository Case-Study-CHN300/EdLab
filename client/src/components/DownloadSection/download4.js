import React from "react";
import Axios from "axios";
import FileDownload from "js-file-download";
import { motion } from "framer-motion";
import {
  Img,
  Container,
  Wrapper,
  variants,
  Row,
  Col1,
  Col2,
  BtnWrrap,
  Button,
  Image,
} from "./DownloadElements";
import WaveBluePink from "../../images/wave-blue-pink.svg";
import WaveBlue from "../../images/wave-blue.svg";
import downloadImg from "../../images/download-img.svg";
const Download = () => {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "/download4",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log("res");
      FileDownload(res.data, "Formaldehyde.pdf");
    });
  };
  return (
    <>
      <Img src={WaveBlue} />
      <Container>
        <Row>
          <Col1>
            <Wrapper>
              <motion.p
                z-index="1"
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
              >
                Formaldehyde
              </motion.p>
              <BtnWrrap>
                <Button
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  // offset={-80}
                  onClick={(e) => download(e)}
                >
                  Download Module
                </Button>
              </BtnWrrap>
            </Wrapper>
          </Col1>
          <Col2>
            <Wrapper>
              <Image src={downloadImg}></Image>
            </Wrapper>
          </Col2>
        </Row>
      </Container>
      <Img src={WaveBluePink} />
    </>
  );
};

export default Download;
