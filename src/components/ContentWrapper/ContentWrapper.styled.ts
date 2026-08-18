import styled from 'styled-components'

// Typecast for props
type ContentWrapperProps = {
    color?: string;
    width: string;
}

export const ContentWrapperStyled = styled.div<ContentWrapperProps>`
    border: solid 1px #000;
    background-color: ${props  => props.color}; // Eksempel med dynamisk værdi
    width: ${({width}) => width}; // Eksempel med destructured dynamisk værdi 

    figure {
        
    }
`