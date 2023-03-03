import styled from 'styled-components';

const Wrapper = styled.nav`
  height: calc(var(--header-height));
  background-color: white;
  .header-container {
    display: flex;
    min-height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 .75rem;
    margin-top: auto;
  }
  .toggle-btn {
    /* display: block; */
    padding: 0;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: var(--main-color);
    border: none;
  }
  .toggle-btn:hover {
    cursor: pointer;
  }
  .user-info {
    display: flex;
    align-items: center;
    background-color: var(--main-color);
    width: 8.5rem;
    padding: .5rem 0.375rem;
    border-radius: .5rem;
    color: white;
    font-size: .75rem;
  }
  .user-icon {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: var(--main-color);
    border-radius: 100%;
    margin-right: 8px;
  }
  .user-toggle {
    color: white;
    background-color: var(--main-color);
    font-size: 1rem;
    margin-left: auto;
    padding: 0 1px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-toggle:hover {
    cursor: pointer;
  }
  @media (min-width: 990px) {
    height: var(--header-height);
    padding-right: 2rem;
    /* padding: 2.25rem 0; */
    .toggle-btn {
      display: none;
    }
    .logo {
      display: none;
    }
    .user-info {
      min-width: 11rem;
      margin: 0 20px 0 auto;
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
