import { OverviewText } from './Biography.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Biography({ currentLang }) {
  const location = useLocation();
  const notFoundMsg =
    currentLang === 'uk-UA' ? 'Немає інформації' : 'No information added';

  return (
    <OverviewText>{location.state ? location.state : notFoundMsg}</OverviewText>
  );
}

Biography.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
