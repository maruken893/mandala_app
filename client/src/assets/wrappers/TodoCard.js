import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 350px;
  box-shadow: 0px 0px 2px 1px #d9d9d9;
  border-radius: 10px;
  /* width: 40%; */
  @media (min-width: 990px) {
    svg {
      vertical-align: bottom;
    }
    .icon {
      margin-right: 0.25rem;
    }
    .icon-1 {
      color: #8a8d89;
    }
    .icon-2 {
      color: #42d735;
    }
    .icon-3 {
    }
    .todo-header {
      padding: 0.25rem 0.5rem;
      border-bottom: 1px solid black;
    }
    .todo-header-text {
      vertical-align: bottom;
    }
    .todo-body {
      padding: 0.5rem 1rem 1rem 1rem;
    }
    .btn-container {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export default Wrapper;
