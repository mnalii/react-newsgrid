import Button from '../../components/Button';
import Card from '../../components/Card';

import Container from '../../components/Container';
import InnerContainer from '../../components/InnerContainer';
import TextHeading from '../../components/TextHeading';

export default function AboutSection() {
  return (
    <section>
      <Container>
        <InnerContainer>
          <Card as='article'>
            <TextHeading as='h1'>About Our Organization</TextHeading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              expedita accusamus, perspiciatis voluptas explicabo maiores maxime
              inventore facilis dolore deleniti? Repellat animi labore
              temporibus est eveniet a culpa sapiente iste, eum earum! Iste
              repudiandae eveniet culpa cum quam illo enim. Vero maxime pariatur
              suscipit ex recusandae quibusdam sunt neque quis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quidem reiciendis sapiente officia libero facilis dolor sint
              deleniti iusto, amet tenetur aperiam exercitationem obcaecati
              dolore optio laudantium? Iste exercitationem aperiam sequi
              laudantium facere, sunt similique consequatur cumque amet impedit
              dignissimos deserunt aut. Asperiores id maiores, sed excepturi
              soluta veniam accusantium praesentium architecto obcaecati ut sunt
              suscipit. Nihil, laborum tempore architecto magni fugiat in
              praesentium voluptatibus nam hic consequatur aspernatur a quidem
              modi. Voluptatibus debitis incidunt nisi porro voluptate
              consectetur libero numquam odio, ea sapiente? Quisquam, aliquam et
              corporis nihil minima commodi exercitationem dolor non hic quis
              numquam harum obcaecati eum molestias inventore culpa itaque
              necessitatibus soluta deleniti laudantium? Quod ea incidunt
              similique pariatur earum error repellendus vitae autem, deserunt
              libero illo neque placeat rerum ullam omnis architecto amet
              asperiores inventore suscipit? Aliquam reprehenderit libero nisi
              soluta, nam vero qui consequatur fugiat delectus minus, tenetur
              ullam, voluptates laborum est deserunt odio.
            </p>
          </Card>

          <Card as='aside' bg='primary'>
            <h2>Join Our Club</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              voluptates.
            </p>

            <Button color='dark' fullWidth>
              Join Now
            </Button>
          </Card>
        </InnerContainer>
      </Container>
    </section>
  );
}
