import styled from 'styled-components';

export const ShowcaseHeader = styled.header`
  color: #fff;
  background-color: #333;
  padding: 2rem;
  position: relative;

  &:before {
    content: '';
    background: url('../img/featured.jpg') no-repeat center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
`;

export const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 50vh;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowcaseContent = styled.div`
  z-index: 1;

  p {
    margin-bottom: 1rem;
  }
`;
