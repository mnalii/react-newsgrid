import styled from 'styled-components';

type ICategory = {
  category: 'sports' | 'ent' | 'tech';
};

const getCategoryColor = (category: string) => {
  if (category === 'sports') {
    return 'var(--sports-color)';
  } else if (category === 'ent') {
    return 'var(--ent-color)';
  } else {
    return 'var(--tech-color)';
  }
};

const Category = styled.div<ICategory>`
  display: inline-block;
  color: #fff;
  font-size: 0.55rem;
  text-transform: uppercase;
  padding: 0.4rem 0.6rem;
  border-radius: 15px;
  margin-bottom: 0.5rem;

  background-color: ${({ category }) => getCategoryColor(category)};
`;

export default Category;
