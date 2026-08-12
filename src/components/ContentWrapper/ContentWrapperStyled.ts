import styled from 'styled-components'

type ContentWrapperProps = {
    color?: string
}

export const ContentWrapperStyled = styled.div<ContentWrapperProps>`
    border: solid 1px #000;
    background-color: ${props => props.color};
`