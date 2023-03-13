import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  min-width: 350px;
  height: fit-content;
  width: 40%;
  border: 1px solid #bababa;
  border-radius: 10px;
  padding: 1rem 2rem;

  @media (min-width: 990px) {
    .title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: bold;
    }
    form {
      margin-top: 20px;
    }
    .flex {
      display: flex;
      justify-content: flex-start;
      gap: 0.5rem;
      .type-selector {
        width: 95%;
        margin-top: 0.25rem;
      }
      .date-picker {
        width: 220px;
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
