import Page from '../components/Page';

import Showcase from '../sections/Showcase';
import HomeArticles from '../sections/HomeArticles';

export default function Home() {
  return (
    <Page title='Home'>
      <Showcase />
      <HomeArticles />
    </Page>
  );
}
