import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  height: fit-content;
  border: 1px solid #bababa;
  border-radius: 10px;
  padding: 1rem 2rem;

  @media (min-width: 990px) {
    width: 70%;
    .title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    form {
      margin-top: 20px;
    }
    .flex {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      .type-selector {
        width: 95%;
        margin-top: 0.25rem;
      }
      .date-picker {
        width: 200px;
        margin-top: 0.25rem;
      }
    }
    .loading {
      margin-top: 20px;
    }
    .btn-container {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      margin-top: 1.5rem;
    }
  }
`;

export default Wrapper;
