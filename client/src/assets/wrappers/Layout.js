import styled from 'styled-components';

const Wrapper = styled.div`
  .right-container {
    z-index: 999;
  }
  .main-container {
    border-radius: 3px;
    width: 100%;
    padding: 10px;
    margin-top: var(--header-height);
  }
  @media (min-width: 990px) {
    display: flex;
    .right-container {
      width: calc(100% - var(--sidebar-width));
      margin-left: var(--sidebar-width);
    }
    .main-container {
      height: calc(100% - var(--header-height));
    }
  }
`;

export default Wrapper;
