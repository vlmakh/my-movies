import { Box } from 'components/Box/Box';
// import { ErrorDescr } from './PageError.styled';
import errorImage from 'images/error-404.jpg';

export default function PageError({ currentLang }) {
  // console.log(currentLang);

  // const errorMsg =
  //   currentLang === 'uk-UA'
  //     ? 'Щось пішло не так, схоже інформація відсутня, спробуйте пізніше...'
  //     : "Something's wrong... probably information isn't added yet, please try later";

  return (
    <Box textAlign="center" mt={4}>
      {/* <ErrorDescr>{errorMsg}</ErrorDescr> */}
      <Box mt={3} maxWidth="800px" mx="auto">
        <img src={errorImage} alt="error 404" width="100%" />
      </Box>
    </Box>
  );
}
