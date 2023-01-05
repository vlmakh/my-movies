import { OverviewText } from './Overview.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Overview({ currentLang }) {
  const location = useLocation();
  const notFoundMsg =
    currentLang === 'uk-UA' ? 'Немає інформації' : 'No information added';

  return (
    <OverviewText>{location.state ? location.state : notFoundMsg}</OverviewText>
  );
}

Overview.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
