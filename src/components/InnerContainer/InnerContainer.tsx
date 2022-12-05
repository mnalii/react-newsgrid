import styled from 'styled-components';

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  margin: 2rem 0;
  grid-gap: 1.5rem;

  & > *:first-child {
    grid-row: 1 / span 3;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;

    & > *:first-child {
      grid-row: 1;
    }
  }
`;

export default InnerContainer;
