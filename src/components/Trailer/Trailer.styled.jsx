import styled from '@emotion/styled';

// export const Trailer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: ${p => p.theme.space[4]}px;
//   gap: ${p => p.theme.space[3]}px;
//   list-style: none;
// `;

export const Text = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.textPrimary};
`;