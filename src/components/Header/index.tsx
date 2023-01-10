import React from 'react'
import { useTheme } from 'context/ThemeContext'
import { MoonIcon, SunIcon } from 'components/icons'

import * as S from './styles'

export const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <S.Header>
      <S.HeaderTitle>devFinder</S.HeaderTitle>
      <S.ThemeButton onClick={toggleTheme}>
        {theme === 'light' ? (
          <>
            Dark
            <MoonIcon />
          </>
        ) : (
          <>
            Light
            <SunIcon />
          </>
        )}
      </S.ThemeButton>
    </S.Header>
  )
}
