import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import List from '../../components/List';
import { MainFooter, FooterContainer } from './Footer.styles';

export default function Footer() {
  return (
    <MainFooter>
      <FooterContainer>
        <div>
          <img src='img/logo_light.png' alt='NewsGrid' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
            atque in dignissimos dolor voluptas commodi sunt nam nulla deserunt?
          </p>
        </div>

        <div>
          <h3>Email Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <form>
            <input type='email' placeholder='Enter email' />
            {/* <input type="submit" value="Subscribe" /> */}
            <LinkButton as='button' color='primary' type='submit'>
              Submit
            </LinkButton>
          </form>
        </div>

        <div>
          <h3>Site Links</h3>

          <List>
            <li>
              <Link to='/'>Help & Support</Link>
            </li>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/'>About Us</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </List>
        </div>

        <div>
          <h2>Join Our Club</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            quis.
          </p>

          <LinkButton to='/' color='secondary'>
            Join Now
          </LinkButton>
        </div>

        <div>
          <p>Copyright &copy; 2019, All Rights Reserved</p>
        </div>
      </FooterContainer>
    </MainFooter>
  );
}
