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
  background-color: #bcc3ce99;
  color: #212121;
  font-weight: 700;

  transform: translateY(100%);
  transition: transform 250ms ease;

  ${MovieThumb}:hover &,
  ${MovieThumb}:focus & {
    transform: translateY(0);
  }
`;
