import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const ReviewAuthor = styled.h4`
  margin-top: ${p => p.theme.space[3]}px;
`;

export const ReviewText = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const ReviewNot = styled.p`
  padding-top: ${p => p.theme.space[4]}px;
`;
