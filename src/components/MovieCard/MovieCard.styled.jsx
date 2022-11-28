// import styled from '@emotion/styled';
import styled from "@emotion/styled/macro";

export const MovieThumb = styled.div`
  position: relative;
  width: 160px;
  height: 240px;
  overflow: hidden;
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: ${p => p.theme.space[2]}px;
  background-color:  ${p => p.theme.colors.bcgTitle};
  color:  ${p => p.theme.colors.textSecondary};
  font-weight: 700;
  text-align: center;

  transform: translateY(100%);
  transition: transform 250ms ease;

  ${MovieThumb}:hover &,
  ${MovieThumb}:focus & {
    transform: translateY(0);
  }
`;

export const MovieYear = styled.p`
  font-style: italic;
  font-weight: 400;
`
