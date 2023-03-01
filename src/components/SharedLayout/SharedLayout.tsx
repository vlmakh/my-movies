import { Outlet } from 'react-router-dom';
import {
  Layout,
  Header,
  HeaderContainer,
  HeaderLink,
  Nav,
  NavMobile,
  LangBtn,
  Footer,
  MyMailLink,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import { logo } from 'images';
import { ThreeCircles } from 'react-loader-spinner';
import { HiSun, HiMoon } from 'react-icons/hi2';
import {
  MdMovie,
  MdMovieFilter,
  MdPhotoCameraFront,
  MdMonochromePhotos,
} from 'react-icons/md';
import { ThemeBtn } from 'components/Buttons/Buttons';
import { t } from 'i18next';
import { LogoVM } from 'components/LogoVM/LogoVM';
import { ILayout } from 'components/types';

export const SharedLayout = ({
  toggleTheme,
  currentTheme,
  turnEnLang,
  turnUaLang,
}: ILayout) => {
  const lang = t('lang');

  return (
    <Layout>
      <Header>
        <HeaderContainer>
          <Nav>
            <HeaderLink to="/">
              <img src={logo} alt="logo" width="32" height="32" />
            </HeaderLink>
            <HeaderLink to="/movies">{t('nav.movies')}</HeaderLink>
            <HeaderLink to="/actors">{t('nav.actors')}</HeaderLink>
            <HeaderLink to="/library">{t('nav.library')}</HeaderLink>
            <HeaderLink to="/album">{t('nav.photoalbum')}</HeaderLink>
          </Nav>

          <NavMobile>
            <HeaderLink to="/">
              <img src={logo} alt="logo" width="32" height="32" />
            </HeaderLink>
            <HeaderLink to="/movies">
              <MdMovie size="24" />
            </HeaderLink>
            <HeaderLink to="/actors">
              <MdPhotoCameraFront size="24" />
            </HeaderLink>
            <HeaderLink to="/library">
              <MdMovieFilter size="24" />
            </HeaderLink>
            <HeaderLink to="/album">
              <MdMonochromePhotos size="24" />
            </HeaderLink>
          </NavMobile>

          <Box display="flex" alignItems="center">
            <Box display="flex" mr={3} height="48px">
              <LangBtn
                type="button"
                onClick={turnEnLang}
                disabled={lang === 'en-US' ? true : false}
              >
                EN
              </LangBtn>
              <LangBtn
                type="button"
                onClick={turnUaLang}
                disabled={lang === 'en-US' ? false : true}
              >
                UA
              </LangBtn>
            </Box>

            <ThemeBtn onClick={toggleTheme}>
              {currentTheme === 'darkTheme' ? (
                <HiMoon size="20" />
              ) : (
                <HiSun size="20" />
              )}
            </ThemeBtn>
          </Box>
        </HeaderContainer>
      </Header>

      <Suspense
        fallback={
          <Box width="100vw" display="flex" justifyContent="center" pt={7}>
            <ThreeCircles
              height="120"
              width="120"
              color="#bcc3ce"
              ariaLabel="Three-Circles-rotating"
              visible={true}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>

      <Footer>
        <MyMailLink
          href="https://vlmakh.github.io/my-portfolio/"
          target="blank"
        >
          <LogoVM />
        </MyMailLink>
        <p>2022</p>
        <MyMailLink href="mailto:vlmakh@gmail.com">vlmakh@gmail.com</MyMailLink>
      </Footer>
    </Layout>
  );
};
