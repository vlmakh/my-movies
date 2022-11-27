import styled from '@emotion/styled';
import bcgImage from 'images/bcg-actors01.jpg';

export const Background = styled.div`
  margin: ${p => p.theme.space[4]}px auto 0;
  max-width: 1280px;
  height: 720px;
  background-image: radial-gradient(
      at center,
      rgba(59, 67, 81, 0.2),
      ${p => p.theme.colors.bcgMain} 70%
    ),
    url(${bcgImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin-top: 16px;
  gap: ${p => p.theme.space[3]}px;
`;

export const ActorsPerson = styled.li`
  box-shadow: none;

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.blackShadow};
  }
`;

export const SearchBtn = styled.button`
  margin-left: ${p => p.theme.space[1]}px;
  font-weight: 700;
  padding: 4px 8px;
  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.bcgBtn};
  border-color: ${p => p.theme.colors.bcgBtn};
  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const SearchInput = styled.input`
  padding: 4px 8px;
`;

export const LoadMoreBtn = styled.button`
  margin-top: ${p => p.theme.space[4]}px;

  padding: 4px 8px;
  color: ${p => (p.disabled ? 'grey' : p.theme.colors.textSecondary)};
  background-color: ${p => p.theme.colors.bcgBtn};
  text-decoration: none;
  /* font-size: 16px; */
  font-weight: 700;
  border-color: ${p => p.theme.colors.bcgBtn};
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};

  transition: color 250ms linear;

  :hover:not(:disabled) {
    color: ${p => p.theme.colors.accent};
  }
`;
