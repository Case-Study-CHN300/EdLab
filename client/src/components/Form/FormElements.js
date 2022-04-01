import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  padding: 1rem 3rem;
  margin-left: 0.2rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
  color: black;
`;