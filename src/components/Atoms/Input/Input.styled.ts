import styled from 'styled-components'

export const InputStyled = styled.input`
width: 100%;

  padding: 0.75rem 1rem;

  font-family: inherit;
  font-size: 1rem;

  background-color: #fff;

  border: 1px solid #ccc;
  border-radius: 6px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${({ theme }) => theme.colors.primary}25;
  }

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`
