import styled from 'styled-components';

const Wrapper = styled.div`
  width: 350px;
  background-color: white;
  padding: 1rem;
  border: 1px solid #bababa;
  border-radius: 5px;
  @media (min-width: 990px) {
    .edit-user-head {
      font-size: 1.375rem;
      font-weight: bold;
    }
    form label {
      display: block;
      width: fit-content;
      text-align: left;
      margin-bottom: 8px;
      font-size: 1.125rem;
    }
    form input {
      display: block;
      width: 100%;
      padding: 0.5rem;
      background-color: #fefaf3;
      border: 1px solid #bababa;
      border-radius: 5px;
    }
    form input:focus {
      border: 1px solid white;
      outline: 2px solid #ffb443;
    }
    form textarea {
      width: 100%;
      height: 10rem;
      padding: 0.375rem 0.25rem;
      background-color: var(--sub-color);
      border-radius: 5px;
      resize: none;
    }
    form textarea:focus {
      border: 1px solid white;
      outline: 2px solid #ffb443;
    }
    .button-container {
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export default Wrapper;
