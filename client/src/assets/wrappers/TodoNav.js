import styled from 'styled-components';

const Wrapper = styled.nav`
  margin-bottom: 2rem;
  padding: 0 1rem .75rem 1rem;
  width: fit-content;
  border-bottom: 1px solid black;
  a {
    text-decoration: none;
    color: #877C6B;
    font-size: 1.5rem;
    font-weight: bold;
  }
  a:first-child {
    margin-right: 2.5rem;
  }
  a:hover {
    color: black;
  }
  a.active {
    color: black;
    border-bottom: 5px solid #FFB443;
  }
`;

export default Wrapper;
