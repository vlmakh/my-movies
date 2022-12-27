import { Box } from 'components/Box/Box';
import errorImage from 'images/error-404.jpg';

export default function PageError({ currentLang }) {
  // console.log(currentLang);

  // const errorMsg =
  //   currentLang === 'uk-UA'
  //     ? 'Щось пішло не так, схоже інформація відсутня, спробуйте пізніше...'
  //     : "Something's wrong... probably information isn't added yet, please try later";

  return (
    <Box maxWidth="800px" mx="auto" mt={4}>
      <img src={errorImage} alt="error 404" width="100%" />
    </Box>
  );
}
