// import { Box } from 'components/Box/Box';
import { OverviewText } from './Overview.styled';
import { useLocation } from 'react-router-dom';

export default function Overview({ currentLang }) {
  const location = useLocation();
  //   console.log(location);
  const notFoundMsg =
    currentLang === 'uk-UA' ? 'Немає інформації' : 'No information added';

  return (
    <OverviewText>{location.state ? location.state : notFoundMsg}</OverviewText>
  );
}
