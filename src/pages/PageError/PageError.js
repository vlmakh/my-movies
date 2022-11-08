import { Box } from 'components/Box/Box';
import errorImage from 'images/error-404.jpg';

export const PageError = () => {
  return (
    <Box textAlign="center" mt={4}>
      <h1>Error 404</h1>
      <p>Something's wrong...</p>
      <img src={errorImage} alt="error 404" />
    </Box>
  );
};