import styled from '@emotion/styled';


export const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const ImageCard = styled.li`
  width: 160px;
  background-color: ${p => p.theme.colors.textPrimary};
`;

export const ImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  box-shadow: none;

  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.blackShadow};
  }
`;


