// import styled from '@emotion/styled';
import styled from "@emotion/styled/macro";

export const ActorThumb = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
`;

export const ActorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ActorTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: ${p => p.theme.space[2]}px;
  background-color:  ${p => p.theme.colors.bcgTitle};
  color:  ${p => p.theme.colors.textSecondary};
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  transform: translateY(100%);
  transition: transform 250ms ease;

  ${ActorThumb}:hover &,
  ${ActorThumb}:focus & {
    transform: translateY(0);
  }
`;

export const Character = styled.p`
  font-style: italic;
  font-weight: 400;
`
