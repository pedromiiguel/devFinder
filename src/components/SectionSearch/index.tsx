import React from 'react'
import { SearchIcon } from 'components/icons'

import * as S from './styles'

type SectionSearchProps = {
  user: string
  setUser: (user: string) => void
  error: string
  handleClick: () => void
}

export const SectionSearch = ({
  user,
  setUser,
  error,
  handleClick
}: SectionSearchProps) => {
  return (
    <S.SearchWrapper>
      <SearchIcon />

      <S.InputSearch
        placeholder="Search GitHub username…"
        type="search"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />

      <S.ErrorMessage>{error}</S.ErrorMessage>

      <S.ButtonSearch onClick={handleClick}>Search</S.ButtonSearch>
    </S.SearchWrapper>
  )
}
