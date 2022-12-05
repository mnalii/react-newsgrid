import styled from 'styled-components';

import Card from '../../components/Card';

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  & > *:first-child,
  & > *:last-child {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    align-items: center;
    grid-column: 1 / span 2;
  }

  & > *:last-child {
    grid-column: 2 / span 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    & > *:first-child,
    & > *:last-child {
      grid-template-columns: 1fr;
      grid-column: 1;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

type IBgColor = {
  bg?: 'primary' | 'secondary' | 'dark' | undefined;
};

export const ArticleCard = styled(Card)<IBgColor>`
  ${({ bg }) =>
    bg &&
    `
    background-color: var(--${bg}-color);
    color: #fff;

    a {
      color: #fff;
    }
  `}
`;
