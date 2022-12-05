import { Link } from 'react-router-dom';
import Category from '../../components/Category';
import Container from '../../components/Container';

import { ArticlesContainer, ArticleCard } from './HomeArticles.styles';

export default function HomeArticles() {
  return (
    <section className='py-2'>
      <Container>
        <h2>Editor Picks</h2>
        <ArticlesContainer>
          <ArticleCard>
            <img src='img/articles/ent1.jpg' alt='Article one' />

            <div>
              <Category category='ent'>Entertainment</Category>
              <h3>
                <Link to='/article'>Lorem ipsum dolor sit amet.</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                consequuntur ratione illo id nostrum facilis tenetur atque
                praesentium temporibus similique!
              </p>
            </div>
          </ArticleCard>

          <ArticleCard bg='dark'>
            <Category category='sports'>Sports</Category>
            <h3>
              <Link to='/article'>Lorem ipsum dolor sit amet.</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequuntur ratione illo id nostrum facilis tenetur atque
              praesentium temporibus similique!
            </p>
          </ArticleCard>

          <ArticleCard>
            <img src='img/articles/tech1.jpg' alt='Tech articles' />
            <Category category='tech'>Technology</Category>
            <h3>
              <Link to='/article'>Lorem ipsum dolor sit amet.</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequuntur ratione illo id nostrum facilis tenetur atque
              praesentium temporibus similique!
            </p>
          </ArticleCard>

          <ArticleCard>
            <Category category='sports'>Sports</Category>
            <h3>
              <Link to='/article'>Lorem ipsum dolor sit amet.</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequuntur ratione illo id nostrum facilis tenetur atque
              praesentium temporibus similique!
            </p>
            <img src='img/articles/sports1.jpg' alt='Sport articles' />
          </ArticleCard>

          <ArticleCard>
            <img src='img/articles/tech2.jpg' alt='Tech articles 2' />
            <Category category='tech'>Technology</Category>
            <h3>
              <Link to='/article'>Lorem ipsum dolor sit amet.</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequuntur ratione illo id nostrum facilis tenetur atque
              praesentium temporibus similique!
            </p>
          </ArticleCard>

          <ArticleCard bg='primary'>
            <Category category='sports'>Sports</Category>
            <h3>
              <Link to='/article'>Lorem ipsum dolor sit amet.</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequuntur ratione illo id nostrum facilis tenetur atque
              praesentium temporibus similique!
            </p>
          </ArticleCard>

          <ArticleCard>
            <div>
              <Category category='ent'>Entertainment</Category>
              <h3>
                <Link to='/article'>Lorem ipsum dolor sit amet.</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                consequuntur ratione illo id nostrum facilis tenetur atque
                praesentium temporibus similique!
              </p>
            </div>
            <img src='img/articles/ent2.jpg' alt='Article one' />
          </ArticleCard>
        </ArticlesContainer>
      </Container>
    </section>
  );
}
