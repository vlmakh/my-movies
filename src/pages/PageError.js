import { Box } from 'components/Box/Box';
import errorImage from 'images/error-404.jpg';

export default function PageError() {
  return (
    <Box maxWidth="800px" mx="auto" mt={6}>
      <img src={errorImage} alt="error 404" width="100%" />
    </Box>
  );
}
