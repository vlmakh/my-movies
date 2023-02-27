import { Box } from 'components/Box/Box';
import errorImage from 'images/error-404.jpg';
import { useEffect } from 'react';
import { t } from 'i18next';

export default function PageError() {
  useEffect(() => {
    document.title = `My Movies | ${t('title.error')}`;
  });

  return (
    <Box maxWidth="800px" mx="auto" mt={6}>
      <img src={errorImage} alt="error 404" width="100%" />
    </Box>
  );
}
