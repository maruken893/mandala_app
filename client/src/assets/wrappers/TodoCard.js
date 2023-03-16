import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 40%;
  box-shadow: 0px 0px 2px 1px #d9d9d9;
  border-radius: 10px;
  /* width: 40%; */
  @media (min-width: 990px) {
    svg {
      vertical-align: middle;
    }
    .icon {
      font-size: 1rem;
      margin-right: 0.25rem;
    }
    .icon-1 {
      color: #8a8d89;
    }
    .icon-2 {
      color: #42d735;
    }
    .icon-3 {
      color: #3559D7;
    }
    .todo-header {
      padding: 0.75rem 0.5rem;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .todo-header-text {
      vertical-align: bottom;
      margin: 0;
    }
    .todo-body {
      padding: 0.5rem 1rem 1rem 1rem;
    }
    .btn-container {
      display: flex;
      justify-content: space-evenly;
    }
    .btn-edit {
      font-size: 0.75rem;
    }
  }
`;

export default Wrapper;
