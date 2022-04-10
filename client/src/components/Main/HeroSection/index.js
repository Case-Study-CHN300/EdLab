import PlanetOne from "../../../images/planet-1.svg";
import PlanetTwo from "../../../images/planet-2.svg";
import PlanetThree from "../../../images/planet-3.svg";
import PlanetFour from "../../../images/planet-4.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  Image,
  Img,
  Button,
} from "./HeroElements";
import WaveBlue from "../../../images/wave-blue-dark.svg";
const HeroSection = () => {
  const navigate = useNavigate();
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const changeRoute = () => {
    navigate("/home");
  };
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to Space
            </motion.h1>
            <motion.p
              z-index="1"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              Journey to the unknown
            </motion.p>
            <Button
              onClick={changeRoute}
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#67F6E7",
                border: "none",
                color: "#000",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              Get Started
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={PlanetOne}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 40, bottom: 50 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetTwo}
              alt="planet"
              whileTap={{ scale: 0.6 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetThree}
              alt="planet"
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 0, right: 50, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetFour}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 10, right: 0, top: 10, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
          </ColumnRight>
        </Container>
      </Section>
      <Img
        src={WaveBlue}
        alt=""
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      />
    </>
  );
};

export default HeroSection;
