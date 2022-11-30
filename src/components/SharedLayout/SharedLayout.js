import { Outlet } from 'react-router-dom';
import {
  Layout,
  Header,
  HeaderLink,
  Nav,
  LangBtn,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import logo from 'images/logo.png';
import { ThreeCircles } from 'react-loader-spinner';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { ThemeBtn } from 'components/Buttons/Buttons';

export const SharedLayout = ({
  toggleTheme,
  currentTheme,
  currentLang,
  turnEnLang,
  turnUaLang,
}) => {
  return (
    <Layout>
      <Header>
        <Nav>
          <HeaderLink to="/">
            <img src={logo} alt="logo" width="32" height="32" />
          </HeaderLink>
          <HeaderLink to="/movies">
            {currentLang === 'uk-UA' ? 'Фільми' : 'Movies'}
          </HeaderLink>
          <HeaderLink to="/actors">
            {currentLang === 'uk-UA' ? 'Актори' : 'Actors'}
          </HeaderLink>
        </Nav>

        <Box display="flex" gap="16px" alignItems="center">
          <Box display="flex" mr={4} height="48px">
            <LangBtn
              type="button"
              onClick={turnEnLang}
              disabled={currentLang === 'en-US' ? true : false}
            >
              EN
            </LangBtn>
            <LangBtn
              type="button"
              onClick={turnUaLang}
              disabled={currentLang === 'uk-UA' ? true : false}
            >
              UA
            </LangBtn>
          </Box>
          {/* <StyledSwitch
            onChange={toggleTheme}
            checked={currentTheme === 'darkTheme' ? false : true}
          /> */}
          <ThemeBtn onClick={toggleTheme}>
            {currentTheme === 'darkTheme' ? (
              <HiMoon size="20" />
            ) : (
              <HiSun size="20" />
            )}
          </ThemeBtn>
        </Box>
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
    </Layout>
  );
};
