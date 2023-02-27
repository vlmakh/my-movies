import { OverviewText } from './Overview.styled';
import { useLocation } from 'react-router-dom';
import { t } from 'i18next';

export default function Overview() {
  const location = useLocation();

  return (
    <OverviewText>
      {location.state ? location.state : t('notFoundMsg')}
    </OverviewText>
  );
}
