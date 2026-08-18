import styled from 'styled-components'
import type { DivProps } from './Div.types'

export const DivStyled = styled.div<DivProps>`
    background-color: ${({ theme, bgcolor }) => 
        bgcolor ? theme.colors[bgcolor] : "transparent"
    };
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    margin: auto auto;

    &.center {
        width: 1200px;
    }

`
