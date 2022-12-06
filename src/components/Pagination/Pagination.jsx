import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  justify-content: center;
  margin-top: 16px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 700;

  & a {
    padding: 0 8px;
    cursor: pointer;
    color: ${p => p.theme.colors.textPrimary};

    transition: color 250ms linear;

    :hover:not(.disabled) {
      color: ${p => p.theme.colors.accent};
    }
  }
`;