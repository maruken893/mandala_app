import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  .icon {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
  svg {
    vertical-align: bottom;
  }
  a {
    color: #877c6b;
    text-decoration: none;
    font-size: 1.25rem;
    display: block;
    .active {
      .text {
        color: black;
      }
      .icon {
        color: var(--main-color);
      }
    }
  }
  a:hover {
    color: black;
    background-color: #fdf3e5;
    .text {
      transition: 0.5s;
      color: black;
    }
    .icon {
      transition: 0.2s;
      color: var(--main-color);
    }
  }
  @media (min-width: 990px) {
    a {
      padding: 0.75rem 0 1.25rem 2.25rem;
    }
    a:hover {
      .link-element {
      transition: 0.2s;
      transform: translateX(0.5rem);
    }
    }
  }
`;

export default Wrapper;
