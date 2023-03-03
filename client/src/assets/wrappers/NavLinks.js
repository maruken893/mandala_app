import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    color: #877c6b;
    text-decoration: none;
    font-size: 1.25rem;
    display: block;
    padding: 0.75rem 0 1.25rem 2.25rem;
  }
  a.active .text {
    color: black;
  }
  a.active .icon {
    color: var(--main-color);
  }
  a:hover {
    color: black;
    background-color: #fdf3e5;
  }
  a:hover .text {
    transition: .7s;
    color: black;
    transform: translateX(0.5rem);
  }
  a:hover .icon {
    transition: 0.25s;
    color: var(--main-color);
    transform: translateX(0.5rem);
  }
  .icon {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
  svg {
    vertical-align: bottom;
  }
`;

export default Wrapper;
