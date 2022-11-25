import { Box } from 'components/Box/Box';
import errorImage from 'images/error-404.jpg';

export default function PageError() {
  return (
    <Box textAlign="center" mt={4}>
      <h1>Error 404</h1>
      <p>
        Something's wrong... probably information isn't added yet, please try
        later
      </p>
      <Box mt={3} maxWidth="800px" mx="auto">
        <img src={errorImage} alt="error 404" width="100%" />
      </Box>
    </Box>
  );
}
