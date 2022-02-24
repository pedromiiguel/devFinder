import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MoonIcon } from '../icons/Moon';
import { SunIcon } from '../icons/Sun';

import * as S from './styles';


const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <S.Header>
      <S.HeaderTitle>devFinder</S.HeaderTitle>
      <S.ThemeButton onClick={toggleTheme}>
        {theme.title === 'light' ? (
          <>
            Light
            <SunIcon />
          </>
        ) : (
          <>
            Dark
            <MoonIcon />
          </>
        )}
      </S.ThemeButton>
    </S.Header>
  );
};

export default Header;
