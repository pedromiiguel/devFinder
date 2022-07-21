import React from 'react';
import { IUserData } from 'templates/Home';
import {
  CompanyIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from 'components/icons';

import * as S from './styles';

type CardProps = {
  userData: IUserData;
};

export const Card = ({ userData }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.CardImageWrapper>
        <S.CardUserImage src={userData?.avatar_url} />
      </S.CardImageWrapper>

      <S.CardContentHeader>
        <div>
          <S.Name>{userData.name ? userData.name : userData.login}</S.Name>
          <S.Tag>@{userData.login}</S.Tag>
        </div>

        <div>
          <S.CreatedData>Joined {userData.formattedDate}</S.CreatedData>
        </div>
      </S.CardContentHeader>

      <S.CardDescription hasData={!!userData.bio}>
        {userData.bio ? userData.bio : 'This profile has no bio'}
      </S.CardDescription>

      <S.CardInfoData>
        <S.SectionInfoData>
          <S.Label>Repos</S.Label>
          <S.Value>{userData.public_repos}</S.Value>
        </S.SectionInfoData>
        <S.SectionInfoData>
          <S.Label>Followers</S.Label>
          <S.Value>{userData.followers}</S.Value>
        </S.SectionInfoData>
        <S.SectionInfoData>
          <S.Label>Following</S.Label>
          <S.Value>{userData.following}</S.Value>
        </S.SectionInfoData>
      </S.CardInfoData>

      <S.CardSocialMedia>
        <S.SocialMediaSection hasData={!!userData.location}>
          <LocationIcon />
          <p>{userData.location ? userData.location : 'Not Available'}</p>
        </S.SocialMediaSection>
        <S.SocialMediaSection hasData={!!userData.twitter_username}>
          <TwitterIcon />

          {userData.twitter_username ? (
            <a
              target="_blank"
              href={`https://twitter.com/${userData.twitter_username}`}
              rel="noreferrer"
            >
              {userData.twitter_username}
            </a>
          ) : (
            <p>Not Available</p>
          )}
        </S.SocialMediaSection>
        <S.SocialMediaSection hasData={!!userData.blog} underline={true}>
          <LinkIcon />

          {userData.blog ? (
            <a target="_blank" href={userData.blog} rel="noreferrer">
              {userData.blog}
            </a>
          ) : (
            <p>Not Available</p>
          )}
        </S.SocialMediaSection>
        <S.SocialMediaSection hasData={!!userData.company}>
          <CompanyIcon />

          {userData.company ? (
            <a
              target="_blank"
              href={`https://github.com/${userData?.company?.replace('@', '')}`}
              rel="noreferrer"
            >
              {userData.company}
            </a>
          ) : (
            <p>Not Available</p>
          )}
        </S.SocialMediaSection>
      </S.CardSocialMedia>
    </S.CardWrapper>
  );
};
