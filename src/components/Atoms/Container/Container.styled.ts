import styled from 'styled-components'
import type { ContainerProps } from './Container.types'

export const ContainerStyled = styled.div<ContainerProps>`
    margin: auto auto;
    padding: 0.6rem 0%;

    &.bluebar {
        background-color: ${props => props.theme.colors.primary};
        width: 100%;
        height: 0.8rem;
    }    

    &.greybar {
        background-color: ${props => props.theme.colors.grey};
    }    

    &.center {
        max-width: 1200px;
    }
`
