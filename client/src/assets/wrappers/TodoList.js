import styled from 'styled-components';

const Wrapper = styled.div`
  .todo-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-items: flex-start;
    gap: 30px;
  }
  .header-text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .pagination {
    margin-top: 30px;
    justify-content: center;
  }
`;

export default Wrapper;
