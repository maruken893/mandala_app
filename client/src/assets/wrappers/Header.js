import styled from 'styled-components';

const Wrapper = styled.nav`
  height: calc(var(--header-height));
  background-color: white;
  width: 100%;
  position: fixed;

  /* left: var(--sidebar-width); */
  .header-container {
    display: flex;
    min-height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 1px solid var(--main-border-color);
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
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    color: white;
    font-size: 0.75rem;
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
  .btn-logout {
    width: 8.5rem;
    font-size: 1rem;
    position: absolute;
    margin-top: 8px;
    padding: .25rem 0;
    background-color: #ffe4a0;
    color: #ff9d09;
  }
  @media (min-width: 990px) {
    width: calc(100% - var(--sidebar-width));
    height: var(--header-height);
    padding-right: 2rem;
    /* padding: 2.25rem 0; */
    .toggle-btn {
      display: none;
    }
    .logo {
      display: none;
    }
    .user-info-container {
      margin: 0 20px 0 auto;
    }
    .user-info {
      min-width: 11rem;
      font-size: 1rem;
      position: relative;
    }
    .btn-logout {
      width: 11rem;
      padding: .375rem 0;
    }
  }
`;

export default Wrapper;
