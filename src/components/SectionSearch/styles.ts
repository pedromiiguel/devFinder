import styled from 'styled-components'

export const SearchWrapper = styled.section`
  width: 100%;
  height: 70px;

  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr 100px;
  gap: 1.5rem;
  position: relative;

  background-color: ${({ theme }) => theme.colors.inputWrapperColor};

  border-radius: 1rem;

  padding: 0.625rem;

  svg {
    width: 24px;
    height: 24px;
    margin-left: 1.375rem;
  }

  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`

export const InputSearch = styled.input`
  border: none;
  background-color: transparent;

  width: 80%;
  height: 100%;

  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.8rem;
  line-height: 2.5rem;

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-family: 'Space Mono';
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-family: 'Space Mono';
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-family: 'Space Mono';
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-family: 'Space Mono';
  }
`

export const ErrorMessage = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.2rem;

  position: absolute;
  bottom: 25px;
  right: 125px;
  color: ${({ theme }) => theme.colors.danger};

  @media (max-width: 425px) {
    bottom: -22px;
  }
`
export const ButtonSearch = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  border: none;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  }
`
