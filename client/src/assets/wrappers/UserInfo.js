import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
  border: 1px solid #bababa;
  border-radius: 5px;
  .flex-icon-edit {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  .icon {
    width: 5rem;
    height: 5rem;
    font-size: 3rem;
    background-color: white;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .user-links {
    margin-bottom: 1rem;
    display: flex;
    text-align: center;
    font-size: 0.875rem;
    font-weight: bold;
    button {
      background-color: white;
      border: none;
    }
    button:hover {
      cursor: pointer;
      color: #696969;
      text-decoration: underline;
    }
    .todo {
      margin-right: 0.5rem;
      padding-right: 0.5rem;
      border-right: 1px solid black;
    }
    .follower {
      margin-right: 0.5rem;
      border-right: 1px solid black;
      padding-right: 0.5rem;
    }
    .bio-label {
      font-size: 1.125rem;
      font-weight: 500;
      margin: 0;
      margin: 0.75rem 0 0.25rem 0;
    }
    .bio {
      margin: 0;
      min-height: 105px;
      max-height: fit-content;
      color: #696969;
    }
  }
  @media (min-width: 990px) {
    width: 350px;
  }
`;

export default Wrapper;
