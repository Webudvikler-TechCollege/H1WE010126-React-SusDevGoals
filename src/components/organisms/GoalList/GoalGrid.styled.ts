import styled from "styled-components";
import { ResetList } from "../../../styles/Mixins";

export const GoalGridStyled = styled.ul`
  ${ResetList};
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  margin: 0;
  padding: 0;

  list-style: none;

  a { 
    text-decoration: none;
  }
`;