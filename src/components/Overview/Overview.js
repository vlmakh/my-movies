// import { Box } from 'components/Box/Box';
import { OverviewText } from './Overview.styled';
import { useLocation } from 'react-router-dom';

export default function Overview() {
  const location = useLocation();
  //   console.log(location);

  return <OverviewText>{location.state}</OverviewText>;
}
