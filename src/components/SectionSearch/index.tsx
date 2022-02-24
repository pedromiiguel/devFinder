import React from 'react';
import * as S from './styles';
import { SearchIcon } from '../icons/Search';


type SectionSearch = {
  user: string;
  setUser: (user: string) => void;
  error: string;
  handleClick: () => void;
};

export const SectionSearch = ({ user, setUser, error, handleClick } : SectionSearch) => {
  return (
    <S.SearchWrapper>
      <SearchIcon />

      <S.InputSearch
        placeholder="Search GitHub username…"
        type="search"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        onKeyPress={((event) => {
          if(event.key === 'Enter'){
            handleClick()
          }
        })}
      />

      <S.ErrorMessage>{error}</S.ErrorMessage>

      <S.ButtonSearch onClick={handleClick}>Search</S.ButtonSearch>
    </S.SearchWrapper>
  );
};


