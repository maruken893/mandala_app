import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;

  @media (min-width: 990px) {
    display: block;
    width: var(--sidebar-width);
    min-height: 100vh;
    background-color: white;
    position: fixed;
    img {
      padding: 1.5rem 0 0 2.25rem;
    }
    .logo-container {
      height: var(--header-height);
    }
    .links {
      height: calc(100vh - var(--header-height));
      border-right: 1px solid var(--main-border-color);
    }
    .sidebar-modal {
      display: none;
    }
  }
`;

export default Wrapper;
