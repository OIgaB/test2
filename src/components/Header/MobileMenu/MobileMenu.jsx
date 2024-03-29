import React from 'react';
import * as S from './MobileMenu.styled';
import { IconSvg } from '../Elements/IconSvg';
import { CountryFilterBtn } from '../CountryFilter/CountryFilterBtn';
import { Navigation } from '../Navigation/Navigation';
import { useHubContext } from '../Elements/Context';
import { Language } from '../Language/Language';


export const MobileMenu = ( { onActiveModal } ) => {
  const { showModalLogin, setShowModalLogin } = useHubContext();

  return (
    <S.MobileMenuContainer>
      <S.MobileMenuHeder>
        <S.LogoLink to='/'>
          <S.Logo alt='HUB23' />
        </S.LogoLink>
        <S.CrossBtn
          type="button"
          aria-expanded="true"
          aria-controls="mobile-menu"
          aria-label='toggle mobile menu'
          onClick={ () => onActiveModal() }
        >
          <IconSvg
            xlWidth='24px'
            xlHeight='24px'
            icon='icon-cross'
          />
        </S.CrossBtn>
      </S.MobileMenuHeder>

      <S.Content>
        <S.CountryFilterWrapper>
          <CountryFilterBtn />
        </S.CountryFilterWrapper>

        <S.NavWrapper>
          <Navigation />
        </S.NavWrapper>

        <S.SignInBtn onClick={ () => setShowModalLogin( !showModalLogin ) }>
          Вхід
        </S.SignInBtn>

        <S.LanguageWrapper>
          <Language />
        </S.LanguageWrapper>

      </S.Content>
    </S.MobileMenuContainer>
  );
};
