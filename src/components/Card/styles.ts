import styled from 'styled-components'

export const CardWrapper = styled.main`
  display: grid;
  grid-template-areas:
    'image header header'
    'image description description'
    'image content content'
    'image social social';

  column-gap: 32px;

  @media (max-width: 768px) {
    grid-template-areas:
      'image header '
      'description description'
      'content content'
      'social social';

    column-gap: 16px;
  }

  @media (max-width: 425px) {
    grid-template-areas:
      'image header'
      'description'
      'content'
      'social';

    row-gap: 16px;
  }

  width: 100%;

  border-radius: 15px;

  margin: 24px 0;
  padding: 4.8rem;

  @media (max-width: 768px) {
    padding: 3.2rem;
  }

  @media (max-width: 425px) {
    padding: 1.6rem;
  }

  background-color: ${({ theme }) => theme.colors.inputWrapperColor};

  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`

export const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-area: image;
`

export const CardUserImage = styled.img`
  width: 117px;
  height: 117px;

  @media (max-width: 425px) {
    width: 70px;
    height: 70px;
  }

  border-radius: 50%;
`

export const CardContent = styled.div``

export const CardContentHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;

  grid-area: header;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Name = styled.h1`
  font-weight: bold;
  font-size: 2.6rem;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.colors.cardTitleColor};
`

export const Tag = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
`

export const CreatedData = styled.p`
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: right;

  @media (max-width: 768px) {
    text-align: initial;
  }
`

type CardDescriptionProps = {
  hasData?: boolean
}

export const CardDescription = styled.p<CardDescriptionProps>`
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: ${({ hasData }) => (hasData ? '1' : '0.5')};
  grid-area: description;

  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 20px;
`

export const CardInfoData = styled.div`
  grid-area: content;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 85px;

  margin-top: 32px;
`

export const SectionInfoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.colors.textColor};
  }
`

export const Label = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Value = styled.p`
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.cardTitleColor};
`

export const CardSocialMedia = styled.div`
  grid-area: social;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr;

  gap: 18px;

  margin-top: 32px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

type SocialMediaSectionProps = {
  hasData?: boolean
  underline?: boolean
}

export const SocialMediaSection = styled.div<SocialMediaSectionProps>`
  display: flex;
  align-items: center;
  opacity: ${({ hasData }) => (hasData ? '1' : '0.5')};
  font-size: 1.5rem;
  line-height: 2.2rem;

  word-break: break-all;

  svg {
    width: 60px;
    height: 20px;
  }

  a {
    text-decoration: none;

    color: ${({ theme }) => theme.colors.textColor};

    &:hover {
      text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textColor};
  }
`
