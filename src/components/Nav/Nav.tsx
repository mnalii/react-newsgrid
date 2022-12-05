import { Link } from 'react-router-dom';
import {
  MainNav,
  NavContainer,
  Logo,
  SocialLink,
  SiteLinks,
} from './Nav.styles';

export default function Nav() {
  return (
    <MainNav>
      <NavContainer>
        <Logo alt='NewsGrid' src='img/logo.png' />
        <SocialLink>
          <a href='http://facebook.com' target='_blank'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
          <a href='http://facebook.com' target='_blank'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>
          <a href='http://facebook.com' target='_blank'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
          <a href='http://facebook.com' target='_blank'>
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        </SocialLink>

        <SiteLinks>
          <li>
            <Link className='current' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </SiteLinks>
      </NavContainer>
    </MainNav>
  );
}
