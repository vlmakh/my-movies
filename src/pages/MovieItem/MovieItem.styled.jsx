import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieTitle = styled.h2`
  margin-top: 0;
  font-size: 36px;
  color: #ffffff;
  text-align: center;
`;
export const MovieImg = styled.img`
  cursor: pointer;
   /* width: 100%; */
  /* height: 100%;*/
  /* object-fit: cover;  */
`;

export const MovieDescr = styled.p`
  margin-top: 16px;
`;

export const GobackLink = styled(NavLink)`
  display: inline-block;
  margin-right: 4px;
  padding: 4px 8px;
  color: #333;
  background-color: #bcc3ce;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
`;
