import styled from 'styled-components';

interface ICard {
  bg?: 'primary' | 'secondary' | 'light' | 'dark' | undefined;
}

const Card = styled.div<ICard>`
  background-color: white;
  padding: 1rem;

  ${({ bg }) =>
    bg &&
    `
    background-color: var(--${bg}-color);
    color: #fff;
  `}
`;

export default Card;
