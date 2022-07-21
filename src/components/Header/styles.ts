import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const HeaderTitle = styled.h1`
  font-size: 2.6rem;
  line-height: 3.9rem;

  font-weight: 700;

  margin: 3.2rem 0;

  color: ${({ theme: theme }) => theme.colors.titleColor};
`

export const ThemeButton = styled.button`
  background: transparent;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.themeButtonColor};

  border: none;

  text-transform: uppercase;

  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;

  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.themeButtonColor};
  }

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.themeButtonHoverColor};

    svg {
      fill: ${({ theme }) => theme.colors.themeButtonHoverColor};
    }
  }
`
