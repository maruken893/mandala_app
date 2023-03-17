import styled from 'styled-components';

const Wrapper = styled.div`
  .todo-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  .header-text {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .pagination {
    margin-top: 30px;
    justify-content: center;
  }
`;

export default Wrapper;
