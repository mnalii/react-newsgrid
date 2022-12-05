import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #c72727;
    --secondary-color: #f99500;
    --light-color: #f3f3f3;
    --dark-color: #333;
    --max-width: 1100px;

    --sports-color: #f99500;
    --ent-color: #a66bbe;
    --tech-color: #009cff;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    line-height: 1.5;
    background-color: var(--light-color);
  }

  a {
    color: #333;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p {
    margin: 0.5rem 0;
  }

  img {
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Staatliches', cursive;
    margin-bottom: .55rem;
    line-height: 1.3;
  }

  .current {
    background-color: var(--primary-color);
    color: #fff;
  }

  .py-1 { padding: 1.5rem 0; }
  .py-2 { padding: 2rem 0; }
  .py-3 { padding: 3rem 0; }

  .p-1 { padding: 1.5rem; }
  .p-2 { padding: 2rem; }
  .p-3 { padding: 3rem; }

  .bg-dark {
    background: var(--dark-color);
    color: #fff
  }

  .bg-primary {
    background: var(--dark-primary);
    color: #fff
  }
  
  .bg-secondary {
    background: var(--dark-secondary);
    color: #fff
  }
`;

export default GlobalStyles;
