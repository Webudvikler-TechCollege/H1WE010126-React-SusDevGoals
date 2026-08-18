import styled from 'styled-components'
import type { DivStyledProps } from './Div.types'

export const DivStyled = styled.div<DivStyledProps>`
    background-color: ${({ theme, $bgcolor }) => 
        $bgcolor ? theme.colors[$bgcolor] : "transparent"
    };
    width: ${props => props.$width || '100%'};
    height: ${props => props.$height || 'auto'};
    margin: auto auto;

    &.greybox {
        background-color: ${props => props.theme.colors.grey};
        padding: 0.6rem 0%;
    }    

    &.center {
        width: 1200px;
    }

`
