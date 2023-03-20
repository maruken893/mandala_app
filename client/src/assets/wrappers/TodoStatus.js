import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  min-width: 400px;
  width: 50%;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #bababa;
  margin-left: 30px;
  .todo-status-header-text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .todo-status-text {
    margin: 0 0 20px 0;
    font-weight: bold;
    font-size: 1.125rem;
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
    color: #3559d7;
  }
`;

export default Wrapper;
