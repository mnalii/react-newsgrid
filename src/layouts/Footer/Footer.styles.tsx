import styled from 'styled-components';
import Container from '../../components/Container';

export const MainFooter = styled.footer`
  background-color: var(--dark-color);
  color: #fff;
  padding: 1.5rem 0;

  img {
    width: 150px;
  }

  a {
    color: #fff;
    /* backgorund-color: white */
  }
`;

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  input[type='email'] {
    width: 90%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  button {
    width: 90%;
  }

  & > *:last-child {
    background-color: #444;
    grid-column: 1 / span 4;
    padding: 0.5rem;
    text-align: center;
    font-size: 0.75rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    & > *:first-child,
    & > *:nth-child(2) {
      border-bottom: #444 dotted 1px;
      padding-bottom: 1rem;
    }

    & > *:last-child {
      grid-column: 1;
    }
  }
`;
