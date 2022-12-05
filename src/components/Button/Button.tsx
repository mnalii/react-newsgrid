import styled from 'styled-components';

interface IColor {
  color?: string;
  fullWidth?: boolean;
}

const getColor = (category?: string) => {
  if (category === 'light') {
    return 'var(--light-color)';
  } else if (category === 'secondary') {
    return 'var(--secondary-color)';
  } else if (category === 'dark') {
    return 'var(--dark-color)';
  } else {
    return 'var(--primary-color)';
  }
};

const Button = styled.button<IColor>`
  display: inline-block;
  border: none;
  background-color: ${({ color }) => getColor(color)};
  color: #fff;
  padding: 0.5rem 1.5rem;

  ${({ fullWidth }) =>
    fullWidth &&
    `
    display: block;
    width: 100%;
    text-align: center;
  `}

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
