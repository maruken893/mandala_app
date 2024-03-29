import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 2px 1px #d9d9d9;
  border-radius: 10px;
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
    color: #3559d7;
  }
  .todo-header {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-bottom: 1px solid #959595;
  }
  .todo-header-text {
    margin: 0;
    font-size:  15px;
    font-weight: bold;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .todo-type-text {
    font-size: 0.875rem;
    margin: 3px 0 0 20px;
    color: #4d4c4c;
  }
  .todo-body {
    padding: 0.75rem 1.25rem 1rem 1.25rem;
  }
  .todo-due-date-container {
    display: flex;
    vertical-align: center;
  }
  .todo-due-date-icon {
    margin: 0 5px 0 0;
  }
  .todo-memo-container {
    display: flex;
    vertical-align: center;
    margin-bottom: 20px;
  }
  .todo-memo-icon {
    margin: 0 5px 0 0;
  }
  .todo-memo-text {
    margin: 0;
    vertical-align: top;
    color: #3e3e3e;
  }
  .btn-container {
    display: flex;
    justify-content: space-evenly;
  }
  @media (min-width: 990px) {
    min-width: 450px;
    width: 45%;
    .todo-header {
      padding: 0.75rem 0.5rem;
      border-bottom: 1px solid #959595;
    }
    .todo-type-text {
      font-size: 0.875rem;
      margin: 3px 0 0 20px;
      color: #4d4c4c;
    }
  }
`;

export default Wrapper;
