import styled from 'styled-components';

const Wrapper = styled.div`
  width: 350px;
  background-color: white;
  padding: 1.5%;
  border: 1px solid #bababa;
  border-radius: 5px;
  @media (min-width: 990px) {
    .flex {
      display: flex;
      justify-content: space-between;
      margin-bottom: .75rem;
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
    .btn-edit {
      /* margin-top: 1rem; */
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
      font-size: .875rem;
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
        padding-right: .5rem;
        border-right: 1px solid black;
      }
      .follower {
        margin-right: 0.5rem;
        border-right: 1px solid black;
        padding-right: .5rem;
      }
    }
    .bio-label {
      font-size: 1.125rem;
      font-weight: 500;
      margin: 0;
      margin: .75rem 0 0.25rem 0;
    }
    .bio {
      margin: 0;
      color: #696969;
    }
  }
`;

export default Wrapper;
