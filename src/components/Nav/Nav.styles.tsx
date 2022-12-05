import styled from 'styled-components';
import Container from '../Container';

export const MainNav = styled.nav`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const NavContainer = styled(Container)`
  display: grid;
  grid-template-columns: 6fr 3fr 2fr;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
  }
`;

export const Logo = styled.img`
  width: 180px;

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

export const SocialLink = styled.div`
  justify-self: center;

  i {
    color: #777;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SiteLinks = styled.ul`
  justify-self: end;
  display: flex;

  li a {
    padding: 0.75rem;
    font-weight: bold;
  }

  li a:hover {
    background-color: var(--light-color);
    color: var(--dark-color);
  }

  @media (max-width: 768px) {
    justify-self: center;

    li a {
      padding: 0.5rem;
    }
  }
`;
