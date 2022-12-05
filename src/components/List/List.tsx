import styled from 'styled-components';

const List = styled.ul`
  li {
    padding: 0.5rem 0;
    border-bottom: #555 dotted 1px;
    width: 90%;
  }

  & li a:hover {
    color: var(--primary-color);
  }
`;

export default List;
