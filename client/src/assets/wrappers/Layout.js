import styled from 'styled-components';

const Wrapper = styled.div`
  .sidebar-container {
    display: none;
  }
  .main-container {
    border-top: 1px solid var(--main-border-color);
    border-radius: 3px;
    width: 100%;
    padding: 10px;
  }
  @media (min-width: 990px) {
    display: flex;
    .sidebar-container {
      display: block;
      width: var(--sidebar-width);
      min-height: 100vh;
      background-color: white;
    }
    .sidebar-container img {
      padding: 1.5rem 0 0 2.25rem;
    }
    .sidebar-container nav {
      margin-top: 4.5rem;
    }
    .sidebar-modal {
      display: none;
    }
    .right-container {
      width: calc(100% - var(--sidebar-width));
    }
    .main-container {
      height: calc(100% - var(--header-height));
      border-left: 1px solid var(--main-border-color);
    }

  }
`;

export default Wrapper;
