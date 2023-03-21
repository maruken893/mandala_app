import styled from 'styled-components';

const Wrapper = styled.div`
  .message-container {
    background-color: #ffb443;
    width: fit-content;
    padding: 1px 1rem;
    margin: 10px auto 0 auto;
    border-radius: 20px;
  }
  .welcome {
    font-size: 1.25rem;
    font-weight: bold;
  }
  p {
    margin: 15px 0;
    text-align: center;
    font-size: 1.125rem;
    font-weight: bold;
    color: white;
  }
  .form-container {
    width: 80%;
    min-height: fit-content;
    margin: 30px auto 0 auto;
    padding: 1rem;
    background-color: white;
    border: 1px solid #bababa;
    border-radius: 3px;
  }

  form label {
    display: block;
    width: fit-content;
    text-align: left;
    margin-bottom: 8px;
    font-size: 1rem;
    font-weight: bold;
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
  form .type-selector {
    width: 100%;
    margin-top: 1.25rem;
  }
  form .type-item {
    display: block;
    width: 100%;
    background-color: #fefaf3;
    padding: 0.5rem;
    border-radius: 5px;
  }
  form .type-item:focus {
    border: 1px solid white;
    outline: 2px solid #ffb443;
  }
  .btn-container {
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
  }

  @media (min-width: 990px) {
    .message-container {
      padding: 1px 6rem;
      margin: 20px auto 0 auto;
    }
    .welcome {
      font-size: 2rem;
    }
    p {
      margin: 25px 0;
      font-size: 1.5rem;
    }
    .form-container {
      width: 400px;
      margin: 40px auto 0 auto;
    }
    form label {
      font-size: 1.125rem;
    }
  }
`;

export default Wrapper;
