import styled from '@emotion/styled';

export const Title = styled.h2`
  color: ${p => p.theme.colors.textPrimary}
`

export const TrendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const TrendsItem = styled.li`
  box-shadow: none;

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.blackShadow};
  }
`;