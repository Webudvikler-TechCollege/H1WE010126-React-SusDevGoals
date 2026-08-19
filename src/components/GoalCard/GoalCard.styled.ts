import styled from 'styled-components'
import { Reset } from '../../styles/Mixins'

export const GoalCardStyled = styled.li`
    background-color: #${props => props.color};
    color: white;
    height: 150px;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    text-decoration: none;

    div:first-child {
        grid-area: 1 / 1 / 2 / 2;
        font-family: ${props => props.theme.fonts[0]};
        font-size: 3rem;
        align-items: start;
    }

    div:nth-child(2) {
        grid-area: 1 / 2 / 2 / 7;
        font-family: ${props => props.theme.fonts[0]};
        text-transform: uppercase;
        font-size: 1.2rem;
        align-items: start;
    }

    div:nth-child(3) {
        fill: white;
        grid-area: 2 / 1 / 4 / 7; 
        text-align: center;
        svg {
            height: 80%;
        }
    }

`