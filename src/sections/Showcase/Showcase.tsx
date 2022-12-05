import {
  ShowcaseHeader,
  ShowcaseContainer,
  ShowcaseContent,
} from './Showcase.styles';

import Container from '../../components/Container';
import Category from '../../components/Category';
import LinkButton from '../../components/LinkButton';

export default function Showcase() {
  return (
    <ShowcaseHeader>
      <Container>
        <ShowcaseContainer>
          <ShowcaseContent>
            <Category category='sports'>Sports</Category>
            <h1>Some Sports Article</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              cupiditate necessitatibus velit, delectus mollitia molestias
              commodi, tenetur harum consequatur hic ab autem quisquam eveniet
              iusto rem. Amet eligendi officia quae.
            </p>

            <LinkButton to='/article'>Read More</LinkButton>
          </ShowcaseContent>
        </ShowcaseContainer>
      </Container>
    </ShowcaseHeader>
  );
}
