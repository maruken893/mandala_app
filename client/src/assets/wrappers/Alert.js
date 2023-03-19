import styled from 'styled-components';

const Wrapper = styled.div`
  .alert {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.625rem 3rem;
    border-radius: 3px;
    font-size: 1.125rem;
    text-align: center;
  }
  .alert-success {
    color: rgb(40, 138, 76);
    background-color: #bde7b9;
  }

  .alert-failed {
    color: rgb(195, 22, 22);
    background-color: #e5c7c7;
  }
`;

export default Wrapper;
